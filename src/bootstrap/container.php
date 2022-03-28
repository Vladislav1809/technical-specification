<?php
require_once __DIR__ . '/../../vendor/autoload.php';

$builder = new \DI\ContainerBuilder();

$builder->addDefinitions(require __DIR__ . '/dependencies.php');

return $builder->build();


