import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { BsFillPlusCircleFill } from "react-icons/bs";
import MenuButton from "./MenuButton";
import MenuLink from "./MenuLink";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import CreateTask from "./CreateTask";

const MenuContent = {
  buttons: ["Notification", "Sun", "Arrow"],
  links: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Boards",
      url: "/",
    },
    {
      label: "Settings",
      url: "/",
    },
    {
      label: "Teams",
      url: "/",
    },
    {
      label: "Analytics",
      url: "/",
    },
  ],
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(!open);

  return (
    <div className=" max-w-16 xl:min-w-[18rem] xl:max-w-[18rem] border-r-2 gap-4 border-gray-300 h-full flex pt-6 px-4 pb-8 flex-col">
      <div className=" flex gap-3 items-center">
        <Link
          href={"/"}
          className=" rounded-lg h-8 w-8 border border-gray-300 flex justify-center items-center"
        >
          <span className=" text-sm font-semibold text-brand-secondary">
            NC
          </span>
        </Link>
        <p className="hidden xl:block text-lg font-semibold text-brand-secondary">
          Navneet Chadha
        </p>
      </div>
      <div className="flex items-center flex-wrap xl:flex-nowrap justify-between w-full gap-3">
        <div className="flex items-center flex-wrap w-full gap-3">
          {MenuContent.buttons.map((button: any, index: number) => (
            <MenuButton key={`${button}-${index}`} icon={button} />
          ))}
        </div>
        <PrimaryButton
          label="Logout"
          type="button"
          isDisabled={false}
          className="hidden xl:flex bg-gray-100 w-fit border-transparent h-10 font-medium text-sm px-2.5 hover:bg-gray-200 text-[#797979] hover:border-transparent"
        />
        <PrimaryButton
          type="button"
          icon={
            <IoLogOutOutline
              className={" stroke-[#797979] cursor-pointer h-5 w-5"}
            />
          }
          isDisabled={false}
          className="xl:hidden bg-transparent border-transparent max-h-8 w-full shadow-none rotate-180 rounded hover:bg-gray-100 text-[#797979] hover:border-transparent"
        />
      </div>
      <div className="flex flex-col gap-2">
        {MenuContent.links.map((link: any, index: number) => (
          <MenuLink
            key={`${link.label}-${index}`}
            url={link.url}
            icon={link.label}
            label={link.label}
          />
        ))}
      </div>
      <PrimaryButton
        label="Create new task"
        type={"button"}
        isDisabled={false}
        iconPosition="left"
        icon={
          <BsFillPlusCircleFill
            className={"text-white cursor-pointer h-5 w-5"}
          />
        }
        onClick={handleOpen}
        className="hidden xl:flex"
      />
      <PrimaryButton
        type={"button"}
        isDisabled={false}
        iconPosition="left"
        icon={
          <BsFillPlusCircleFill
            className={"text-white cursor-pointer h-5 w-5"}
          />
        }
        onClick={handleOpen}
        className="xl:hidden max-h-8 w-full shadow-none rotate-180 rounded"
      />
      <CreateTask open={open} handleClose={handleClose} />
    </div>
  );
}
