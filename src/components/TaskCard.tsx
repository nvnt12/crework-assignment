import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxDotsVertical } from "react-icons/rx";
import { TaskProps } from "./ContentSection";

type TaskCardProps = {
  index: number;
  status: string;
} & TaskProps;

export default function TaskCard({
  index,
  status,
  title,
  description,
  priority,
  deadline,
}: TaskCardProps) {
  return (
    <div className="w-full bg-white h-auto flex flex-col justify-start gap-3 border hover:shadow-xl cursor-pointer hover:shadow-brand-primary/5 px-4 py-2 rounded-md">
      <div className="flex w-full justify-end gap-2">
        <p className=" text-gray-400 text-sm font-medium">#{index + 1}</p>
        <div className="flex w-full justify-end gap-2">
          <button
            type="button"
            className=" group rounded h-6 w-6 hover:bg-gray-100 flex justify-center items-center"
          >
            <FiEdit
              className={
                "group-hover:text-[#797979] text-[#666666] cursor-pointer h-4 w-4"
              }
            />
          </button>
          <button
            type="button"
            className=" group rounded h-6 w-6 hover:bg-gray-100 flex justify-center items-center"
          >
            <RiDeleteBin6Line
              className={
                "group-hover:text-[#797979] text-[#666666] cursor-pointer h-4 w-4"
              }
            />
          </button>
          <button
            type="button"
            className=" group rounded h-6 w-6 hover:bg-gray-100 flex justify-center items-center"
          >
            <RxDotsVertical
              className={
                "group-hover:text-[#797979] text-[#666666] cursor-pointer h-4 w-4"
              }
            />
          </button>
        </div>
      </div>
      <h2 className="text-lg font-semibold text-brand-secondary">{title}</h2>
      <p className="text-brand-text text-sm">{description}</p>
      {priority && priority === "Low" ? (
        <div className=" bg-brand-green w-fit py-1 px-2.5 rounded text-xs text-white font-semibold">
          Low
        </div>
      ) : priority === "Medium" ? (
        <div className=" bg-brand-orange w-fit py-1 px-2.5 rounded text-xs text-white font-semibold">
          Medium
        </div>
      ) : (
        priority === "Urgent" && (
          <div className=" bg-brand-red w-fit py-1 px-2.5 rounded text-xs text-white font-semibold">
            Urgent
          </div>
        )
      )}
      <div className="flex w-full gap-2">
        <p className="text-gray-500 text-sm font-medium">Deadline:</p>
        <p className="text-brand-secondary text-sm font-medium">
          {deadline ? deadline.toLocaleString() : "--/--/----"}
        </p>
      </div>
    </div>
  );
}
