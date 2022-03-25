<?php
namespace entity;

use entity\Client;
use entity\Task;
use Mpdf\Tag\P;
use PDO;
use Twig_Environment;
//require autoload

require_once __DIR__ . "/vendor/autoload.php";
require_once (__DIR__ . '/config.php');

$entityManager = GetEntityManager();
$tasks = $entityManager->getRepository(Task::class)->findAll();

$taskArray = [];
foreach ($tasks as $task){
    $taskClientsName = [];
    /** @var \entity\Task $task */
    $clients = $task->getUsers()->getValues();
    foreach ($clients as $client) {
        /** @var \entity\Client $client */
        $taskClientsName[] = $client->getClient();
    }
    $taskArray[] = [
        'id' => $task->getId(),
        'name' => $task->getName(),
        'dateOfCreate' => $task->getDateOfCreate()->format('d.m.Y'),
        'deadline' => $task->getDeadline()->format('d.m.Y'),
        'users' => $taskClientsName
    ];
}
// using array_multisort for sort $users array
array_multisort($taskArray, SORT_ASC);

$loader = new \Twig\Loader\FilesystemLoader('templates');
$twig = new Twig_Environment($loader);
$title = "Список задач";
$template = $twig->loadTemplate('tasks.html');
$mpdf = new \Mpdf\Mpdf(['tempDir' => __DIR__ . '/']);


$html= $template->render(array(
    'title' => $title,
    'id' => 'Уникальный номер',
    'name' => 'Название задачи',
    'dateOfCreate' => 'Дата создания задачи',
    'deadline' => 'Дата конца задачи',
    'users' => 'Участвующие клиенты',
    'taskArray' => $taskArray
));

$mpdf->WriteHTML($html);
$mpdf->Output();
var_dump($taskArray);