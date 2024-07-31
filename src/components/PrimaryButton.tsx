import { cn } from "@/utils/cn";

type ButtonProps = {
  label: string;
  type: "button" | "submit" | "reset";
  isDisabled: boolean;
  classNames?: string;
  onClick?: any;
};

export default function PrimaryButton({
  label,
  type = "button",
  isDisabled,
  classNames,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        "bg-brand-primary hover:bg-brand-primary-dark border border-brand-primary hover:border-brand-primary-dark text-white text-lg font-semibold h-12 w-full rounded-lg",
        classNames
      )}
    >
      {label}
    </button>
  );
}
