import { cn } from "@/utils/cn";
import { ChangeEvent, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

type InputProps = {
  label: string;
  name: string;
  type: "text" | "password" | "number" | "email";
  placeholder: string;
  required: boolean;
  defaultValue: string;
  register: any;
  errors: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  options?: any;
  classNames?: string;
};

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  classNames,
  required,
  defaultValue,
  register,
  errors,
  onChange,
  options,
}: InputProps) {
  // State to toggle password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative w-full">
        <input
          type={
            type === "password" ? (isPasswordVisible ? "text" : type) : type
          }
          placeholder={placeholder}
          className={cn(
            "bg-brand-background w-full rounded-lg py-3 h-12 px-4 text-lg text-gray-600 border focus:outline-none focus:border-brand-primary border-transparent",
            classNames
          )}
          required={required}
          defaultValue={defaultValue}
          {...register(name, {
            required: required
              ? `${label ? label : "This field "} is required!`
              : false,
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
            ...options,
          })}
          onChange={onChange}
        />
        {type === "password" && (
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
              className="text-gray-500 hover:text-gray-700"
            >
              {isPasswordVisible ? (
                <VscEyeClosed className="h-5 w-5" />
              ) : (
                <VscEye className="h-5 w-5" />
              )}
            </button>
          </span>
        )}
      </div>
      {errors && errors[name] && (
        <p className="text-brand-red text-xs font-medium">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}
