<?php

use src\entity\Task;

require_once(__DIR__ . '/../config.php');

$entityManager = GetEntityManager();
$tasks = $entityManager->getRepository(Task::class)->findAll();

print 'Tasks: ' . print_r($tasks, true) . PHP_EOL;