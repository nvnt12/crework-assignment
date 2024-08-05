import { cn } from "@/utils/cn";

type ButtonProps = {
  label?: string;
  type: "button" | "submit" | "reset";
  isDisabled: boolean;
  className?: string;
  onClick?: any;
  icon?: any;
  iconPosition?: "left" | "right";
};

export default function PrimaryButton({
  label,
  type = "button",
  isDisabled,
  className,
  onClick,
  icon,
  iconPosition = "left",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        "bg-brand-primary shadow-inner shadow-white/40 hover:bg-brand-primary-dark border border-brand-primary flex justify-center items-center gap-2 hover:border-brand-primary-dark text-white text-lg font-medium h-12 w-full rounded-lg",
        className
      )}
    >
      {icon && iconPosition === "right" && <span>{icon}</span>}
      {label && label}
      {icon && iconPosition === "left" && <span>{icon}</span>}
    </button>
  );
}
