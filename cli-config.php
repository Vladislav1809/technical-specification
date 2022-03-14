<?php
use Doctrine\ORM\Tools\Console\ConsoleRunner;

// cli-config.php
require_once 'config.php';
$entityManager = GetEntityManager();
return ConsoleRunner::createHelperSet($entityManager);
