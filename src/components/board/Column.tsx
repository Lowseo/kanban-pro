import { Column as ColumnData } from "@/types";
import Card from "./Card";

interface ColumnProps {
  column: ColumnData;
}

export default function Column({ column }: ColumnProps) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 ml-2">
      <Card tasks={[]} />
    </div>
  );
}
