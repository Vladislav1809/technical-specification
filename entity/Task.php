<?php
namespace entity;

// entity/Task.php

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use dto\AbstractDto;
use dto\TaskDto;
use dto\TaskWithClientsDto;
use entity\Client;


/** @ORM\Entity
 */
class Task
{

//    /**
//     * Many Groups have Many Users.
//     * @ManyToMany(targetEntity="entity\Client", mappedBy="tasks")
//     *
//     */
//    private $users;
    /**
     * @ORM\ManyToMany(targetEntity="entity\Client", mappedBy="tasks")
     */
    private $users;

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $name;
    /**
     * @ORM\Column(name="date_of_create", type="datetime")
     */
    private $dateOfCreate;
    /**
     * @ORM\Column(type="datetime")
     */
    private $deadline;

    public function __construct() {
        $this->users = new ArrayCollection();
    }

    /**
     * @return Collection
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    public function addClient(Client $client){
        if (!$this->users->contains($client)){
            $this->users->add($client);
}
    }
    public function setDateOfCreate($dateOfCreate)
    {
        $this->dateOfCreate = $dateOfCreate;
        return $this;
    }

    public function setDeadline($deadline)
    {
        $this->deadline = $deadline;
        return $this;

    }

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getDateOfCreate(): \DateTime
    {
        return $this->dateOfCreate;
    }

    public function getDeadline(): \DateTime
    {
        return $this->deadline;
    }


    public function toDto(): AbstractDto
    {
        $taskDto = new TaskDto();
        $taskDto->id = $this->getId();
        $taskDto->name = $this->getName();
        $taskDto->dateOfCreate = $this->getDateOfCreate()->format("d.m.Y");
        $taskDto->deadline = $this->getDeadline()->format("d.m.Y");

        return $taskDto;
    }

    public function toDtoWithClients(){
        /** @var TaskWithClientsDto $taskWithClientsDto */
        $taskWithClientsDto = $this->toDto();
        /** @var Client $client */
        foreach ($this->getUsers()->getValues() as $client) {
            $taskWithClientsDto->users[] = $client->toDto();
        }
        return $taskWithClientsDto;
    }



}

