<?php
require_once __DIR__ . '/config.php';


$phpInput = json_decode(file_get_contents("php://input"), true);
$_REQUEST = array_merge($_REQUEST, $phpInput === null ? [] : $phpInput);

header("Content-Type: application/json");


if ($_REQUEST['act'] == 'Client') {
    $service = new src\service\ClientService(GetEntityManager());
    $clientController = new src\controller\ClientController($service);
    $response = $clientController->{$_REQUEST['method']}($_REQUEST);
    if (!empty($response)) {
        echo json_encode($response);
    } else {
        echo json_encode(['success' => true]);
    }
} elseif ($_REQUEST['act'] == 'Task') {
    $service = new src\service\TaskService(GetEntityManager());
    $taskController = new src\controller\TaskController($service);
    $response = $taskController->{$_REQUEST['method']}($_REQUEST);
    if (!empty($response)) {
        echo json_encode($response);
    } else {
        echo json_encode(['success' => true]);
    }
}