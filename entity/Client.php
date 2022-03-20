<?php
namespace entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use dto\AbstractDto;
use dto\ClientDto;
use dto\ClientWithTasksDto;
use entity\Task;

/** @ORM\Entity */
class Client
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $client;

//    /**
//     * Many Users have Many Groups.
//     * @ManyToMany(targetEntity="entity\Task", inversedBy="client")
//     * @JoinTable(name="client_tasks")
//     */
//    private $tasks;

    /**
     * @ORM\ManyToMany(targetEntity="entity\Task", inversedBy="client")
     * @ORM\JoinTable(name="client_tasks",
     *                  joinColumns={@ORM\JoinColumn(name="client_id", referencedColumnName="id")},
     *                  inverseJoinColumns={@ORM\JoinColumn(name="task_id", referencedColumnName="id")}
     *              )
     */
    private $tasks;


    public function __construct()
    {
        $this->tasks = new ArrayCollection();
    }

    /**
     * @return Collection
     */
    public function getTasks(): Collection
    {
        return $this->tasks;
    }

    public function addTask(Task $task)
    {
        if (!$this->tasks->contains($task)) {
            $this->tasks->add($task);
        }
    }


    public function setId($id)
    {
        $this->id = $id;
    }

    public function setClient($client)
    {
        $this->client = $client;
        return $this;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getClient()
    {
        return $this->client;
    }

    public function toDto(): AbstractDto
    {
        $dto = new ClientDto();
        $dto->id = $this->getId();
        $dto->name = $this->getClient();

        return $dto;
    }

    public function toDtoWithTasks()
    {
        /** @var ClientWithTasksDto $dtoWithTasks */
        $dtoWithTasks = $this->toDto();
        /** @var Task $task */
        foreach ($this->getTasks()->getValues() as $task) {
            $dtoWithTasks->tasks[] = $task->toDto();
        }
        return $dtoWithTasks;
    }

}
// Postman Account, Запрос
// http://gubkin.space/ka2107_09/act=Client&method=getClients