<?php
//php-di
require __DIR__. '/../../vendor/autoload.php';

$container = require __DIR__ . '/../bootstrap/container.php';
$phpInput = json_decode(file_get_contents("php://input"), true);
$_REQUEST = array_merge($_REQUEST, $phpInput === null ? [] : $phpInput);

header("Content-Type: application/json");
if ($_REQUEST['act'] == 'Client') {
    $clientController = $container->get('ClientController');
    $response = $clientController->{$_REQUEST['method']}($_REQUEST);
    if (!empty($response)) {
        echo json_encode($response);
    } else {
        echo json_encode(['success' => true]);
    }
}elseif($_REQUEST['act'] == 'Task'){
    $taskController = $container->get('TaskController');
    $response = $taskController->{$_REQUEST['method']}($_REQUEST);
    if (!empty($response)) {
        echo json_encode($response);
    } else {
        echo json_encode(['success' => true]);
    }
}
