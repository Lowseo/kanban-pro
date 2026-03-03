import { Task } from "@/types";

interface CardProps {
  tasks: Task[];
}

export default function Card({ tasks }: CardProps) {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {tasks.map((t) => (
          <li key={t.id} className="bg-white rounded-md shadow-sm p-3">
            <div
              className={`${
                t.priority === "high"
                  ? "bg-red-500"
                  : t.priority === "medium"
                    ? "bg-yellow-500"
                    : "bg-blue-500 text-black"
              }  h-1 w-full rounded-t-md`}
            ></div>
            <h2 className="font-bold mb-2 text-center">{t.title}</h2>
            <p className="mb-2 text-center">{t.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
