<?php

use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\Common\Cache\ArrayCache;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\Driver\AnnotationDriver;
use Doctrine\ORM\Tools\Setup;

require_once "vendor/autoload.php";

/**
 * @return EntityManager
 * @throws \Doctrine\DBAL\DBALException
 * @throws \Doctrine\ORM\ORMException
 */
function GetEntityManager()
{
    $config = Setup::createConfiguration(true, __DIR__ . '/var/cache', new ArrayCache());
    $driver = new AnnotationDriver(new AnnotationReader(), [__DIR__ . '/entity']);
    $isDevMode = true;
    $proxyDir = null;
    $cache = null;
    $useSimpleAnnotationReader = false;
    $paths = array(__DIR__ . '/entities');
    $config = \Doctrine\ORM\Tools\Setup::createAnnotationMetadataConfiguration($paths, $isDevMode, $proxyDir, $cache, $useSimpleAnnotationReader);
    $connectionParams = array(
        'dbname' => 'test',
        'user' => 'vladislav',
        'password' => '7879031318',
        'host' => 'localhost',
        'driver' => 'pdo_pgsql',
    );
    $config->setMetadataDriverImpl($driver);
    $config->setProxyDir(__DIR__ . '/var/cache');
    $entityManager = EntityManager::create($connectionParams, $config);

    return $entityManager;
}

$entityManager = GetEntityManager();

//$sql = "SELECT * FROM client";
//
//$result = $entityManager->getConnection()->executeQuery($sql)->fetchAll(PDO::FETCH_ASSOC);
//
//var_dump(
//    $result
//);