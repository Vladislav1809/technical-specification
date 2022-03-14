<?php

use entity\Customer;

require_once(__DIR__ . '/../config.php');
require_once(__DIR__ . '/../entity/Customer.php');

//create a first customer
$entityManager = GetEntityManager();
$Customer = new Customer('customer','Customer@customer.ru');
$entityManager->persist($Customer);
$entityManager->flush();

echo "Created customer with id " . $Customer->getId() . PHP_EOL;

// List of all customers:

//$Customer = $entityManager->getRepository(Customer::class)->findAll();
//
//print 'Customers: ' . print_r($Customer, true) . PHP_EOL;


