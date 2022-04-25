<?php

return [
    'UserManager' => function (\Psr\Container\ContainerInterface $object) {
        return new \Classes\Services\UserManager($object->get('Mailer'));
    },

    'Mailer' => DI\factory(function () {
        return new \Classes\Libs\Mailer();

    }),

    'ProductService' => DI\factory(function () {
        return new \Classes\Services\ProductService();

    })

];