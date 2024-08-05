import { RxDoubleArrowRight } from "react-icons/rx";
import NotificationIcon from "../../public/icons/NotificationIcon";
import SunIcon from "../../public/icons/SunIcon";

type MenuButtonProps = {
  icon: string;
  onClick?: (e: any) => void;
};

export default function MenuButton({ icon, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      className=" group rounded h-8 w-8 hover:bg-gray-100 flex justify-center items-center"
      onClick={onClick}
    >
      {icon === "Notification" ? (
        <NotificationIcon
          className={
            "group-hover:stroke-[#797979] stroke-[#666666] cursor-pointer h-5 w-5"
          }
        />
      ) : icon === "Sun" ? (
        <SunIcon
          className={
            "group-hover:stroke-[#797979] stroke-[#666666] cursor-pointer h-5 w-5"
          }
        />
      ) : (
        icon === "Arrow" && (
          <RxDoubleArrowRight
            className={
              "group-hover:text-[#797979] text-[#666666] cursor-pointer h-[1.125rem] w-[1.125rem]"
            }
          />
        )
      )}
    </button>
  );
}
