import Link from "next/link";
import HomeIcon from "../../public/icons/HomeIcon";
import BoardsIcon from "../../public/icons/BoardsIcon";
import SettingsIcon from "../../public/icons/SettingsIcon";
import TeamsIcon from "../../public/icons/TeamsIcon";
import AnalyticsIcon from "../../public/icons/AnalyticsIcon";

type MenuButtonProps = {
  url: string;
  icon: string;
  label: string;
};

export default function MenuLink({ url, icon, label }: MenuButtonProps) {
  return (
    <Link
      className=" rounded border border-transparent hover:border-gray-300 xl:px-2 py-1 xl:gap-2 w-full hover:bg-gray-100 text-[#797979] text-lg font-medium flex items-center justify-center xl:justify-start"
      href={url ? url : "/"}
    >
      {icon === "Home" ? (
        <HomeIcon
          className={" stroke-[#797979] cursor-pointer h-5 w-5 xl:h-6 xl:w-6"}
        />
      ) : icon === "Boards" ? (
        <BoardsIcon
          className={" stroke-[#797979] cursor-pointer h-5 w-5 xl:h-6 xl:w-6"}
        />
      ) : icon === "Settings" ? (
        <SettingsIcon
          className={" stroke-[#797979] cursor-pointer h-5 w-5 xl:h-6 xl:w-6"}
        />
      ) : icon === "Teams" ? (
        <TeamsIcon
          className={" stroke-[#797979] cursor-pointer h-5 w-5 xl:h-6 xl:w-6"}
        />
      ) : (
        icon === "Analytics" && (
          <AnalyticsIcon
            className={" stroke-[#797979] cursor-pointer h-5 w-5 xl:h-6 xl:w-6"}
          />
        )
      )}
      <span className="hidden xl:inline-block ">{label}</span>
    </Link>
  );
}
