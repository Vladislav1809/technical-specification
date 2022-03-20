<?php

namespace service;

use Doctrine\ORM\EntityManager;
use dto\ClientDto;
use entity\Client;
use entity\Task;

class ClientService
{
    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

//    public function save(ClientDto $clientDto, Task $task)
    public function save(ClientDto $clientDto)
    {

        if (empty($clientDto->id)) {
            $client = new Client();
        } else {
            $client = $this->entityManager->find(Client::class, $clientDto->id);
        }

        $client
            ->setClient($clientDto->name);
//            ->addTask($task);
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

    public function getUserTasks(int $id)
    {

        /** @var Client $client */
        $client = $this->entityManager->getRepository(Client::class)->findOneBy([
            'id' => $id,
        ]);
        $client->getTasks();
    }

    public function delete(int $id){
        $client = $this->entityManager->getRepository(Client::class)->findOneBy([
            'id' => $id,
        ]);


    }




}