<?php

namespace src\controller;

use src\dto\ClientDto;
use src\dto\ClientWithTasksDto;
use src\entity\Client;
use src\entity\Task;
use src\service\ClientService;
use src\service\TaskService;

require_once(__DIR__ . '/../config.php');
class ClientController
{
    private $clientService;
    public function __construct(ClientService $clientService) {
        $this->clientService = $clientService;
    }

    public function save($request)
    {
        $clientDto = $this->toIdNameDto($request);
        $this->clientService->save($clientDto);
    }


    private function toIdNameDto($incomingData)
    {
        $dto = new ClientWithTasksDto();
        $dto->id = $incomingData['id'];
        $dto->name = $incomingData['name'];
        $dto->tasks = $incomingData['taskIds'];
        return $dto;
    }


    public function getClients()
    {
        return $this->clientService->get();
    }

    public function getClientTasks()
    {
        return $this->clientService->get();

    }

    public function delete($incomingData)
    {
        if ($incomingData !== NULL) {
            $this->clientService->delete($incomingData['id']);
        }
    }

    public function getPdf(){
        $this->clientService->getPdf();
    }
}
