<?php

namespace entity;

use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\Table;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\GeneratedValue;


/**
 * @Entity @Table(name="Customer")
 **/
class Customer
{
    /** @Id @Column(type="integer") @GeneratedValue * */
    protected $id;

    /** @Column(type="string") * */
    protected $name;

    /** @Column(type="string") * */
    protected $email;


    public function __construct(string $name, string $email)
    {
        $this->name = $name;
        $this->email = $email;
    }


    # Accessors
    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getEmail(): string
    {
        return $this->email;
    }
}

// добавить данные в таблицу
// controller/
// api.php
// dependency injection <- read