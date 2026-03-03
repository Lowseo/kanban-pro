import Column from "@/components/board/Column";
import AppLayout from "@/components/layout/AppLayout";
import { Task } from "@/types";

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

  const todoTasks = arrayData.filter((t) => t.status === "todo");
  const doneTasks = arrayData.filter((t) => t.status === "done");
  const inProgressTasks = arrayData.filter((t) => t.status === "in-progress");

  return (
    <AppLayout>
      <h2 className="text-2xl font-semibold mb-3 p-3">My Board</h2>

      <div className="flex gap-6 overflow-x-auto pb-4 ml-2">
        <Column title="TO-DO" tasks={todoTasks} />
        <Column title="DONE" tasks={doneTasks} />
        <Column title="In-PROGRESS" tasks={inProgressTasks} />
      </div>
    </AppLayout>
  );
}
