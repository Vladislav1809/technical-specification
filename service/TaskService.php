<?php

namespace service;

use Doctrine\ORM\EntityManager;
use dto\TaskDto;
use entity\Task;
use entity\Client;

class TaskService
{
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function save(TaskDto $taskDto)
    {
        if (empty($TaskDto->id)) {
            $task = new Task();
        } else {
            $task = $this->entityManager->find(Task::class, $taskDto->id);
        }


        $task
            ->setName($taskDto->name)
            ->setDateOfCreate(new \DateTime($taskDto->dateOfCreate))
            ->setDeadline(new \DateTime($taskDto->deadline));

        $this->entityManager->persist($task);
        $this->entityManager->flush();
    }

    public function get()
        /** @var Task[] $tasks */
    {
        $tasks = $this->entityManager->getRepository(Task::class)->findAll();
        $dtos = [];
        foreach ($tasks as $task){
            $dtos[] = $task->toDtoWithClients();
        }
        return $dtos;
    }

//    public function getTask

}