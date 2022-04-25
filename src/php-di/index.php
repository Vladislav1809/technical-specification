<?php
header("Content-Type: application/json");

$autoloadContainer = require __DIR__ . '/../bootstrap/autoloadContainer.php';
$inputData = require __DIR__ . '/input.php';

$controllerNameSpace = "src\controller\\";

try {
    $controller = $autoloadContainer->get($controllerNameSpace . $inputData['act'] . "Controller");
    try {
        $response = $controller->{$inputData['method']}($inputData);
        if (!empty($response)) {
            echo json_encode($response);
        } else {
            echo json_encode(['success' => true]);
        }
    } catch (\Exception $e){
        echo json_encode(['Error masage' => 'Метод не обнаружен!']);
    }
} catch (\Exception $exception){
    echo json_encode(['Error massage' => 'Класс не обнаружен!']);
}
