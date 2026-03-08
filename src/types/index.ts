export interface Task {
  id: number;
  title: string;
  description?: string | null;
  priority: "low" | "medium" | "high";
  status: "todo" | "in-progress" | "done";
}

export interface Column {
  id: number;
  title: string;
  tasks: Task[];
}
