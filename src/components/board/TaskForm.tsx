"use client";

import { useState } from "react";
import { Task } from "@/types";

interface TaskFormProps {
  onSubmit: (data: Omit<Task, "id">) => void;
}

export default function TaskForm({ onSubmit }: TaskFormProps) {
  const [formData, setFormData] = useState<Omit<Task, "id">>({
    title: "",
    description: "",
    priority: "medium",
    status: "todo",
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
          }
        />
        <textarea
          name="description"
          value={formData.description || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
          }
        ></textarea>
        <select
          name="priority"
          value={formData.priority}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select
          name="status"
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
          }
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In-progress</option>
          <option value="done">Done</option>
        </select>
        <button type="submit">Отправить данные</button>
      </form>
    </div>
  );
}
