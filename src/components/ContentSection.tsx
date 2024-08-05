import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import BoardColumn from "./BoardColumn";
import { useState } from "react";

export type TaskProps = {
  title: string;
  description: string;
  priority: string;
  deadline: Date;
};

type ColumnProps = {
  title: string;
  tasks: TaskProps[];
};
const initialColumns: ColumnProps[] = [
  {
    title: "To-do",
    tasks: [
      {
        title: "Task 6",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et`,
        priority: "Low",
        deadline: new Date(),
      },
      {
        title: "Task 7",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et`,
        priority: "Urgent",
        deadline: new Date(),
      },
    ],
  },
  {
    title: "In Progress",
    tasks: [
      {
        title: "Task 5",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et`,
        priority: "Medium",
        deadline: new Date(),
      },
      {
        title: "Task 4",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et`,
        priority: "Low",
        deadline: new Date(),
      },
    ],
  },
  {
    title: "Under Review",
    tasks: [
      {
        title: "Task 3",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et`,
        priority: "Urgent",
        deadline: new Date(),
      },
    ],
  },
  {
    title: "Completed",
    tasks: [
      {
        title: "Task 1",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et`,
        priority: "Urgent",
        deadline: new Date(),
      },
      {
        title: "Task 2",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et`,
        priority: "Medium",
        deadline: new Date(),
      },
    ],
  },
];

export default function ContentSection() {
  const [columns, setColumns] = useState(initialColumns);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceColumnIndex = columns.findIndex(
      (column) => column.title === source.droppableId
    );
    const destColumnIndex = columns.findIndex(
      (column) => column.title === destination.droppableId
    );

    const sourceColumn = columns[sourceColumnIndex];
    const destColumn = columns[destColumnIndex];

    const sourceTasks = Array.from(sourceColumn.tasks);
    const [removed] = sourceTasks.splice(source.index, 1);

    if (sourceColumn === destColumn) {
      sourceTasks.splice(destination.index, 0, removed);
      const newColumns = [...columns];
      newColumns[sourceColumnIndex].tasks = sourceTasks;
      setColumns(newColumns);
    } else {
      const destTasks = Array.from(destColumn.tasks);
      destTasks.splice(destination.index, 0, removed);

      const newColumns = [...columns];
      newColumns[sourceColumnIndex].tasks = sourceTasks;
      newColumns[destColumnIndex].tasks = destTasks;
      setColumns(newColumns);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="w-full h-full overflow-auto">
        <div className="min-w-[1040px] max-w-[1040px] xl:max-w-[1080px] grid grid-cols-4 gap-7">
          {columns.map((column, index) => (
            <BoardColumn
              key={`${column.title}-${index}`}
              title={column.title}
              tasks={column.tasks}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}
