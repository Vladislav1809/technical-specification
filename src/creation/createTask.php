<?php

use src\entity\Task;

require_once(__DIR__ . '/../config.php');

//create a first customer
$entityManager = GetEntityManager();
$task = new Task();
$task->setName('task 2');
$task->setDateOfCreate(new DateTime());
$task->setDeadline(new DateTime());
$entityManager->persist($task);
$entityManager->flush();


