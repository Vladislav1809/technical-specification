<?php

namespace service;

use Doctrine\ORM\EntityManager;
use dto\ClientDto;
use dto\ClientWithTasksDto;
use entity\Client;
use entity\Task;
use Mpdf\Tag\P;
use PDO;
use Twig_Environment;

require_once __DIR__ . '/../vendor/autoload.php';


class ClientService
{
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function save(ClientWithTasksDto $clientDto)
    {
        if (empty($clientDto->id)) {
            $client = new Client();
        } else {
            $client = $this->entityManager->getRepository(Client::class)->find($clientDto->id);
        }
        $client
            ->setClient($clientDto->name);

        /** @var Task $task */
        foreach ($client->getTasks()->getValues() as $task) {
            if(!in_array($task->getId(), $clientDto->tasks)) {
                $client->removeTask($task);
                $task->removeClient($client);
            }
        }

        foreach ($clientDto->tasks as $taskId) {
            /** @var Task $task */
            $task = $this->entityManager->getRepository(Task::class)->find($taskId);
            $client->addTask($task);
            $task->addClient($client);
        }
        $this->entityManager->persist($client);
        $this->entityManager->flush();
    }

    public function get()
    {
        /** @var Client[] $clients */
        $clients = $this->entityManager->getRepository(Client::class)->findAll();
        $dtos = [];
        foreach ($clients as $client) {
            $dtos[] = $client->toDtoWithTasks();
        }
        return $dtos;
    }

    public function delete(int $id)
    {
        $client = $this->entityManager->getRepository(Client::class)->findOneBy([
            'id' => $id,
        ]);
        $this->entityManager->persist($client);
        $this->entityManager->remove($client);
        $this->entityManager->flush();
    }

    public function getPdf()
    {
        $clients = $this->entityManager->getRepository(Client::class)->findAll();
        $users = [];
        foreach ($clients as $client){
            $clientTasksName = [];
            /** @var \entity\Client $client */
            $tasks = $client->getTasks()->getValues();
            foreach ($tasks as $task) {
                /** @var \entity\Task $task */
                $clientTasksName[] = $task->getName();
            }
            $users[] = [
                'id' => $client->getId(),
                'name' => $client->getClient(),
                'tasks' => $clientTasksName
            ];
        }
        // using array_multisort for sort $users array
        array_multisort($users, SORT_ASC);

        $loader = new \Twig\Loader\FilesystemLoader('templates');
        $twig = new Twig_Environment($loader);
        $title = "Список пользователей";
        $template = $twig->loadTemplate('users.html');
        $mpdf = new \Mpdf\Mpdf(['tempDir' => __DIR__ . '/']);

        $html= $template->render(array(
            'title' => $title,
            'id' => 'Уникальный номер',
            'nameOfUsers' => 'Ф.И.О',
            'tasks' => 'Задачи',
            'clients' => $users
        ));

        $mpdf->WriteHTML($html);
        $mpdf->Output();
    }
}