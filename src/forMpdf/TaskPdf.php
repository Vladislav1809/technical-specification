<?php
namespace src\forMpdf;

use Mpdf\MpdfException;
use Throwable as ThrowableAlias;
use Twig\Loader\FilesystemLoader as FilesystemLoaderAlias;
use Twig_Environment;
use Twig_Error_Loader;


class TaskPdf
{
    public static function getPdf(array $taskArray){
        $loader = new FilesystemLoaderAlias('../templates');
        $twig = new Twig_Environment($loader);
        $template = $twig->loadTemplate('tasks.html');
        $mpdf = new \Mpdf\Mpdf(['tempDir' => __DIR__ . '/']);
        $title = "Список задач";
        $mpdf->WriteHTML($template->render(array(
            'title' => $title,
            'id' => 'Уникальный номер',
            'name' => 'Название задачи',
            'dateOfCreate' => 'Дата создания задачи',
            'deadline' => 'Дата конца задачи',
            'users' => 'Участвующие клиенты',
            'taskArray' => $taskArray
        )));
        $mpdf->Output();
    }
}