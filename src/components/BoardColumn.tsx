import { cn } from "@/utils/cn";
import BoardHeader from "./BoardHeader";
import TaskCard from "./TaskCard";
import { TaskProps } from "./ContentSection";
import { Draggable, Droppable } from "@hello-pangea/dnd";

type BoardColumnProps = {
  title: string;
  className?: string;
  tasks: TaskProps[];
};

export default function BoardColumn({
  title,
  className,
  tasks,
}: BoardColumnProps) {
  return (
    <Droppable droppableId={title}>
      {(provided) => (
        <div
          className={cn(
            "min-w-[240px] w-[240px] xl:min-w-[250px] xl:w-[250px] flex flex-col gap-3",
            className
          )}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <BoardHeader title={title} />
          {tasks.map((task, index) => (
            <Draggable
              key={`${task.title}-${index}`}
              draggableId={`${task.title}-${index}`}
              index={index}
            >
              {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps}>
                  <div {...provided.dragHandleProps}>
                    <TaskCard
                      index={index}
                      status={title}
                      title={task.title}
                      description={task.description}
                      priority={task.priority}
                      deadline={task.deadline}
                    />
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
