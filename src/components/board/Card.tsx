import { Task } from "@/types";

interface CardProps {
  task: Task;
}

export default function Card({ task }: CardProps) {
  return (
    <div>
      <ul>
        <li className="bg-white rounded-md shadow-sm p-3">
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
        </li>
      </ul>
    </div>
  );
}
