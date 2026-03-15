import { Task } from "@/types";
import Card from "./Card";

interface ColumnProps {
  title: string;
  tasks: Task[];
  onAddCard: () => void;
  deleteTask: (id: number) => void;
  editTask: (task: Task) => void;
}

export default function Column({
  title,
  tasks,
  onAddCard,
  deleteTask,
  editTask,
}: ColumnProps) {
  return (
    <div className="bg-gray-200 rounded-lg w-80 p-4">
      <h2 className="font-bold">{title}</h2>
      <p>Количество задач: {tasks.length}</p>
      {tasks.map((task) => (
        <Card
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}

      <button
        className="mt-3 w-full p-3 bg-gray-100 hover:bg-gray-300 rounded cursor-pointer font-bold"
        onClick={onAddCard}
      >
        Add Card
      </button>
    </div>
  );
}
