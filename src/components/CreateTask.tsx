import { Modal } from "@mui/material";
import Input from "./Input";
import { useForm } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";

type CreateTaskProps = {
  open: boolean;
  handleClose: () => void;
  status?: string;
};

export default function CreateTask({
  open,
  handleClose,
  status,
}: CreateTaskProps) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  // Example submit handler
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white flex flex-col rounded-lg w-full max-w-lg p-4 gap-2.5"
      >
        <div className="flex w-full justify-between gap-2 pl-2">
          <h1 className="text-lg font-semibold text-brand-secondary">
            Create New Task
          </h1>
        </div>
        <form
          className="w-full flex flex-col gap-3 p-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full gap-2">
            <p className="text-brand-secondary text-sm font-medium">Title:</p>
            <Input
              label="Title"
              name="title"
              type="text"
              placeholder="Enter Task Title"
              required={true}
              defaultValue=""
              register={register}
              errors={errors}
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
              className="h-9 text-sm text-brand-secondary bg-slate-300/50"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-brand-secondary text-sm font-medium">
              Description:
            </p>
            <Input
              label="Description"
              name="description"
              type="textarea"
              placeholder="Enter Task Description"
              required={false}
              defaultValue=""
              register={register}
              errors={errors}
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
              className="h-9 text-sm text-brand-secondary bg-slate-300/50"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-brand-secondary text-sm font-medium">Status:</p>
            <Input
              label="Status"
              name="status"
              type="text"
              placeholder="Enter Task Status"
              required={true}
              defaultValue={status || ""}
              register={register}
              errors={errors}
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
              className="h-9 text-sm text-brand-secondary bg-slate-300/50"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-brand-secondary text-sm font-medium">
              Priority:
            </p>
            <Input
              label="Priority"
              name="priority"
              type="text"
              placeholder="Enter Task Priority"
              required={false}
              defaultValue=""
              register={register}
              errors={errors}
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
              className="h-9 text-sm text-brand-secondary bg-slate-300/50"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-brand-secondary text-sm font-medium">
              Deadline:
            </p>
            <Input
              label="Deadline"
              name="deadline"
              type="date"
              placeholder="Enter Task Deadline"
              required={false}
              defaultValue=""
              register={register}
              errors={errors}
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
              className="h-9 text-sm text-brand-secondary bg-slate-300/50"
            />
          </div>
          <div className="flex w-full gap-2 mt-3">
            <PrimaryButton
              type={"button"}
              isDisabled={false}
              label="Cancel"
              className="flex bg-slate-300/50 border-transparent h-10 font-medium text-sm px-2.5 hover:bg-gray-300 text-[#797979] hover:border-transparent"
            />
            <PrimaryButton
              type={"button"}
              isDisabled={false}
              label="Create"
              className="h-10 text-md"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
}
