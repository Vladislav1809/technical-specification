<?php
require_once __DIR__ . '/../config.php';
return [
    'ClientController' => DI\factory(function (\Psr\Container\ContainerInterface $clientService) {
        return new \src\controller\ClientController($clientService->get('ClientService'));
    }),
    'TaskController' => DI\factory(function (\Psr\Container\ContainerInterface $taskService) {
        return new \src\controller\TaskController($taskService->get('TaskService'));
    }),
    'ClientService' => DI\factory(function () {
        return new \src\service\ClientService(getEntityManager());
    }),
    'TaskService' => DI\factory(function () {
        return new \src\service\TaskService(getEntityManager());
    }),
    'TaskPdf' => DI\factory(function () {
        return new \src\forMpdf\TaskPdf();
    }),
    'UserPdf' => DI\factory(function () {
        return new \src\forMpdf\UserPdf();
    })
];
