<?php

namespace controller;

use dto\ClientDto;
use entity\Client;
use service\ClientService;

require_once(__DIR__ . '/../config.php');
class ClientController
{
    private $clientService;

    public function __construct(ClientService $clientService){
        $this->clientService = $clientService;
    }

    public function save($request)
    {
        $clientDto = $this->toIdNameDto($request);
        $this->clientService->save($clientDto);
    }


    private function toIdNameDto($incomingData)
    {
        $dto = new ClientDto();
        $dto->id = $incomingData['id'];
        $dto->name = $incomingData['name'];

        return $dto;
    }


    public function getClients()
    {
        return ($this->clientService->get());
    }

    public function getClientTasks()
    {
        return ($this->clientService->get());

    }


}
