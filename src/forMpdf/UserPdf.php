<?php

namespace src\forMpdf;

use Mpdf\MpdfException;
use Throwable as ThrowableAlias;
use Twig\Loader\FilesystemLoader as FilesystemLoaderAlias;
use Twig_Environment;
use Twig_Error_Loader;


class UserPdf
{
    public static function getPdf(array $userArray){
//        register_shutdown_function(
//            function (){
//                var_dump(error_get_last());
//                die();
//            }
//        );
        $loader = new FilesystemLoaderAlias('../templates');
        $twig = new Twig_Environment($loader);
        $template = $twig->loadTemplate('users.html');
        $mpdf = new \Mpdf\Mpdf(['tempDir' => __DIR__ . '/']);
        $title = "Список пользователей";
        $mpdf->WriteHTML($template->render(array(
            'title' => $title,
            'id' => 'Уникальный номер',
            'nameOfUsers' => 'Ф.И.О',
            'tasks' => 'Задачи',
            'clients' => $userArray
        )));
        $mpdf->Output();
    }
}