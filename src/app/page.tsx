"use client";

import Column from "@/components/board/Column";
import TaskForm from "@/components/board/TaskForm";
import AppLayout from "@/components/layout/AppLayout";
import Modal from "@/components/ui/Modal";
import { Task } from "@/types";

import { useState } from "react";

export default function Home() {
  const arrayData: Task[] = [
    {
      id: 1,
      title: "Подготовить отчёт по продажам за первый квартал",
      description:
        "Собрать данные по продажам из CRM, проанализировать динамику и оформить отчёт в виде таблицы и графиков.",
      priority: "high",
      status: "todo",
    },
    {
      id: 2,
      title: "Провести встречу с командой разработки",
      description:
        "Обсудить текущий статус проекта, распределить задачи на следующую неделю и выявить возможные проблемы.",
      priority: "medium",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Обновить документацию по API",
      description:
        "Добавить описание новых эндпоинтов и обновить примеры запросов/ответов.",
      priority: "low",
      status: "in-progress",
    },
    {
      id: 4,
      title: "Проверить и утвердить бюджет на следующий месяц",
      description: null,
      priority: "high",
      status: "todo",
    },
    {
      id: 5,
      title: "Отправить финальную версию презентации клиенту",
      description:
        "Убедиться, что все правки внесены, и отправить файл по электронной почте.",
      priority: "medium",
      status: "done",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(arrayData);

  const onAddCard = () => {
    setIsOpen(true);
  };

  const handleCreateTask = (formData: Omit<Task, "id">) => {
    let newTask = {
      ...formData,
      id: Date.now(),
    };
    setTasks([...tasks, newTask]);
    setIsOpen(false);
  };

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const doneTasks = tasks.filter((t) => t.status === "done");
  const inProgressTasks = tasks.filter((t) => t.status === "in-progress");

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <AppLayout>
      <h2 className="text-2xl font-semibold mb-3 p-3">My Board</h2>

      <div className="flex gap-6 overflow-x-auto pb-4 ml-2">
        <Column
          title="TO-DO"
          tasks={todoTasks}
          onAddCard={onAddCard}
          deleteTask={deleteTask}
        />
        <Column
          title="DONE"
          tasks={doneTasks}
          onAddCard={onAddCard}
          deleteTask={deleteTask}
        />
        <Column
          title="In-PROGRESS"
          tasks={inProgressTasks}
          onAddCard={onAddCard}
          deleteTask={deleteTask}
        />
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <TaskForm onSubmit={handleCreateTask} />
        <button onClick={() => setIsOpen(false)}>Закрыть</button>
      </Modal>
    </AppLayout>
  );
}
