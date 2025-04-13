import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Text as IText } from "@/types/form";

// prettier-ignore
export default function Text({ error, icon, label, name, placeholder, type = "text", value, ...attributes }: IText) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <fieldset className="flex w-full flex-col justify-between">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <div className="relative mt-4 text-gray-500">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            {icon}
          </span>
        )}
        <input
          name={name}
          id={name}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          className={`w-full appearance-none rounded-lg border-2 py-2.5 pl-14 transition-all duration-200 focus:outline-none ${error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-[#1a4167] focus:ring-[#1a4167]/20"} ${type === "password" && "pr-12"}`}
          defaultValue={value}
          {...attributes}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-0 flex items-center pr-4"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <h5 className="mt-2 cursor-default text-sm text-red-500">{error}</h5>}
    </fieldset>
  );
}