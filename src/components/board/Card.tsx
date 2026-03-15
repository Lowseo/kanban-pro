import { Task } from "@/types";

interface CardProps {
  task: Task;
  deleteTask: (id: number) => void;
  editTask: (task: Task) => void;
}

export default function Card({ task, deleteTask, editTask }: CardProps) {
  return (
    <div>
      <ul>
        <li className="bg-white rounded-md shadow-sm p-3 mb-2">
          <div
            className={`${
              task.priority === "high"
                ? "bg-red-500"
                : task.priority === "medium"
                  ? "bg-yellow-500"
                  : "bg-blue-500 text-black"
            }  h-1 w-full rounded-t-md`}
          ></div>
          <h2 className="font-bold mb-2 text-center">{task.title}</h2>
          <p className="mb-2 text-center">{task.description}</p>

          <button
            className="w-full bg-red-400 text-white p-2 rounded-2xl cursor-pointer mt-1 font-bold hover:bg-red-500 duration-300"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
          <button
            className="w-full bg-blue-400 text-white p-2 rounded-2xl cursor-pointer mt-1 font-bold hover:bg-blue-500 duration-300"
            onClick={() => editTask(task)}
          >
            Edit
          </button>
        </li>
      </ul>
    </div>
  );
}
