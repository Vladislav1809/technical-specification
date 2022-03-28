<?php
use Doctrine\ORM\Tools\Console\ConsoleRunner;

// cli-config.php
require_once __DIR__ . '/config.php';
$entityManager = GetEntityManager();
return ConsoleRunner::createHelperSet($entityManager);
