<?php

namespace service;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use dto\TaskDto;
use dto\TaskWithClientsDto;
use entity\Task;
use entity\Client;
use Mpdf\Tag\P;
use PDO;
use Twig_Environment;

require_once __DIR__ . '/../vendor/autoload.php';


class TaskService
{
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function checkCorrectDate($firstDate, $secondDate)
    {
         $date1 = new \DateTime($firstDate);
         $date2 = new \DateTime($secondDate);
         if ($date1 > $date2){
             throw new \Exception('ERROR');
         }
    }

    public function save(TaskWithClientsDto $taskDto)
    {
        try {
            $this->checkCorrectDate($taskDto->dateOfCreate, $taskDto->deadline);
            if (empty($taskDto->id)) {
                $task = new Task();
            } else {
                $task = $this->entityManager->getRepository(Task::class)->find($taskDto->id);
            }
            $task
                ->setName($taskDto->name)
                ->setDateOfCreate(new \DateTime($taskDto->dateOfCreate))
                ->setDeadline(new \DateTime($taskDto->deadline));


            /** @var Client $client */
            foreach ($task->getUsers()->getValues() as $client) {
                if (!in_array($client->getId(), $taskDto->users)) {
                    $task->removeClient($client);
                    $client->removeTask($task);
                }
            }
            foreach ($taskDto->users as $clientId) {
                /** @var Client $client */
                $client = $this->entityManager->getRepository(Client::class)->find($clientId);
                $task->addClient($client);
                $client->addTask($task);
            }
            $this->entityManager->persist($task);
            $this->entityManager->flush();

        } catch (\Exception $e) {
            $exceptionText = $e->getMessage();
            echo json_encode(['Error massage' => $exceptionText]);
            throw new \Exception();
        }
    }

    public function get()
        /** @var Task[] $tasks */
    {
        $tasks = $this->entityManager->getRepository(Task::class)->findAll();
        $dtos = [];
        foreach ($tasks as $task) {
            $dtos[] = $task->toDtoWithClients();
        }
        return $dtos;
    }

    public function delete(int $id)
    {
        $task = $this->entityManager->getRepository(Task::class)->findOneBy([
            'id' => $id,
        ]);
        $this->entityManager->persist($task);
        $this->entityManager->remove($task);
        $this->entityManager->flush();
    }
    public function getPdf()
    {
        $tasks = $this->entityManager->getRepository(Task::class)->findAll();
        $taskArray = [];
        foreach ($tasks as $task){
            $taskClientsName = [];
            /** @var \entity\Task $task */
            $clients = $task->getUsers()->getValues();
            foreach ($clients as $client) {
                /** @var \entity\Client $client */
                $taskClientsName[] = $client->getClient();
            }
            $taskArray[] = [
                'id' => $task->getId(),
                'name' => $task->getName(),
                'dateOfCreate' => $task->getDateOfCreate()->format('d.m.Y'),
                'deadline' => $task->getDeadline()->format('d.m.Y'),
                'users' => $taskClientsName

            ];
        }
        // using array_multisort for sort $users array
        array_multisort($taskArray, SORT_ASC);

        $loader = new \Twig\Loader\FilesystemLoader('templates');
        $twig = new Twig_Environment($loader);
        $title = "Список задач";
        $template = $twig->loadTemplate('tasks.html');
        $mpdf = new \Mpdf\Mpdf(['tempDir' => __DIR__ . '/']);

        $html= $template->render(array(
            'title' => $title,
            'id' => 'Уникальный номер',
            'name' => 'Название задачи',
            'dateOfCreate' => 'Дата создания задачи',
            'deadline' => 'Дата конца задачи',
            'users' => 'Участвующие клиенты',
            'taskArray' => $taskArray
        ));

        $mpdf->WriteHTML($html);
        $mpdf->Output();
    }
}