<?php

namespace src\service;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManager;
use src\dto\TaskDto;
use src\dto\TaskWithClientsDto;
use src\entity\Task;
use src\entity\Client;
use src\forMpdf\TaskPdf;
require_once __DIR__ . '/../../vendor/autoload.php';


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
        $taskArray = $this->get();
        array_multisort($taskArray, SORT_ASC);
        TaskPdf::getPdf($taskArray);
    }
}