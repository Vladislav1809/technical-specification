<?php

namespace controller;

use service\TaskService;
use entity\Task;
use dto\TaskDto;

require_once __DIR__ . '/../config.php';

class TaskController
{

    private $taskService;

    public function __construct(TaskService $taskService){
        $this->taskService = $taskService;
    }

    public function toIdNameDto($incomingData)
    {
        $dto = new TaskDto();
        $dto->id = $incomingData['id'];
        $dto->name = $incomingData['name'];
        $dto->dateOfCreate = $incomingData['dateOfCreate'];
        $dto->deadline = $incomingData['deadline'];

        return $dto;

    }
    public function save($request)
    {
        $taskDto = $this->toIdNameDto($request);
        $this->taskService->save($taskDto);
    }

    public function getTasks()
    {
        return ($this->taskService->get());
    }
    public function getTaskClients()
    {
        return ($this->taskService->get());
    }
}