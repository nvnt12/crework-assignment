import { cn } from "@/utils/cn";

export default function BoardHeader({ title }: { title: string }) {
  const columnColors: { [key: string]: string } = {
    "To-do": "bg-brand-primary",
    "In Progress": "bg-brand-primary-dark",
    "Under Review": "bg-brand-orange",
    Completed: "bg-brand-green",
  };

  const columnColor: string = columnColors[title];
  return (
    <div className="w-full h-fit flex items-center justify-start gap-4 border px-4 py-2 rounded-md mb-2">
      <div className={cn("w-1.5 h-9 rounded-full ", columnColor)}></div>
      <div className="flex w-full justify-between items-center gap-4">
        <span className="font-semibold capitalize text-brand-secondary">
          {title}
        </span>
        <div className="h-7 w-7 flex justify-center items-center border border-gray-200 rounded-full">
          <span className="text-xs font-bold text-brand-text">1</span>
        </div>
      </div>
    </div>
  );
}
