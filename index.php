<?php
namespace entity;

use entity\Task;
use entity\Client;
use Mpdf\Tag\P;
use PDO;
use Twig_Environment;

require_once (__DIR__ . '/vendor/autoload.php');
require_once (__DIR__ . '/config.php');

$entityManager = GetEntityManager();

$clients = $entityManager->getRepository(Client::class)->findAll();


$users = [];
foreach ($clients as $client){
    $clientTasksName = [];
    /** @var \entity\Client $client */
    $tasks = $client->getTasks()->getValues();
    foreach ($tasks as $task) {
        /** @var \entity\Task $task */
        $clientTasksName[] = $task->getName();
    }
    $users[] = [
        'id' => $client->getId(),
        'name' => $client->getClient(),
        'tasks' => $clientTasksName
    ];
}
$loader = new \Twig\Loader\FilesystemLoader('templates');
$twig = new Twig_Environment($loader);

$template = $twig->loadTemplate('index.html');
$title = "Название страницы";

echo $template->render(array(
    'title' => $title,
    'id' => 'Id',
    'nameOfUsers' => 'Name of user',
    'tasks' => 'Tasks',
    'clients' => $users
));
