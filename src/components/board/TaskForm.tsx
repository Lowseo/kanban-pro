"use client";

import { useEffect, useState } from "react";
import { Task } from "@/types";

interface TaskFormProps {
  onSubmit: (data: Omit<Task, "id">) => void;
  initialData: Task | null;
}

export default function TaskForm({ onSubmit, initialData }: TaskFormProps) {
  const [formData, setFormData] = useState<Omit<Task, "id">>({
    title: initialData?.title || "",
    description: initialData?.description || "",
    priority: initialData?.priority || "medium",
    status: initialData?.status || "todo",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description,
        priority: initialData.priority,
        status: initialData.status,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        status: "todo",
      });
    }
  }, [initialData]);

  return (
    <div className=" bg-slate-50 flex items-center justify-center p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-slate-800">Создать задачу</h2>
          <p className="text-slate-500 text-sm">Заполните детали ниже</p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Title Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700 ml-1">
              Заголовок
            </label>
            <input
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
              type="text"
              name="title"
              placeholder="Название задачи..."
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>

          {/* Description Textarea */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700 ml-1">
              Описание
            </label>
            <textarea
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[100px] resize-none"
              name="description"
              placeholder="О чем эта задача?"
              value={formData.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>

          {/* Selects Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 ml-1">
                Приоритет
              </label>
              <select
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                name="priority"
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              >
                <option value="low">🟢 Low</option>
                <option value="medium">🟡 Medium</option>
                <option value="high">🔴 High</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 ml-1">
                Статус
              </label>
              <select
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                name="status"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              >
                <option value="todo">📋 Todo</option>
                <option value="in-progress">⚙️ In-progress</option>
                <option value="done">✅ Done</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
        >
          Отправить данные
        </button>
      </form>
    </div>
  );
}
