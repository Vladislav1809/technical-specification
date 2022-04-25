<?php

use src\entity\Client;

require_once(__DIR__ . '/../config.php');

$entityManager = GetEntityManager();

$Client = $entityManager->getRepository(Client::class)->findAll();

print 'Clients: ' . print_r($Client, true) . PHP_EOL;