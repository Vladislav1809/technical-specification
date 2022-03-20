<?php

use entity\Client;

require_once(__DIR__ . '/../config.php');
require_once(__DIR__ . '/../entity/Client.php');

//create a first customer
$entityManager = GetEntityManager();
$Client = new Client();
//$User->setId(1);
$Client->setClient('test');
$entityManager->persist($Client);
$entityManager->flush();

//echo "Created customer with id " . $Customer->getId() . PHP_EOL;

// List of all customers:

//$Customer = $entityManager->getRepository(Customer::class)->findAll();
//
//print 'Customers: ' . print_r($Customer, true) . PHP_EOL;


