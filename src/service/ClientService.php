<?php

namespace src\service;

use Doctrine\ORM\EntityManager;
use src\dto\ClientDto;
use src\dto\ClientWithTasksDto;
use src\entity\Client;
use src\entity\Task;
use Mpdf\Tag\P;
use PDO;
use Twig_Environment;
use src\forMpdf\UserPdf;

require_once __DIR__ . '/../../vendor/autoload.php';


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
            /** @var Client $client */
            $tasks = $client->getTasks()->getValues();
            foreach ($tasks as $task) {
                /** @var Task $task */
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
        UserPdf::getPdf($users);

    }
}