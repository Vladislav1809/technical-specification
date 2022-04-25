<?php
// php-di
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/../../vendor/autoload.php';

$app = new \DI\ContainerBuilder();

$container = $app->build();
$container->set(\Doctrine\ORM\EntityManager::class, GetEntityManager());

return $container;
