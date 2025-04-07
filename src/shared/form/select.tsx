import { ChevronDown } from "lucide-react";
import { Select as ISelect } from "@/types/form";

// prettier-ignore
export default function Select({ error, icon, label, name, placeholder, options, value, ...attributes }: ISelect) {
  return (
    <fieldset className="flex w-full flex-col justify-between space-y-4">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <div className="relative text-gray-500">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            {icon}
          </span>
        )}
        <select
          name={name}
          id={name}
          className="w-full appearance-none rounded-lg border-2 border-gray-300 py-2.5 pr-4 pl-14 transition-all duration-200 focus:border-[#1a4167] focus:ring-[#1a4167]/20 focus:outline-none"
          defaultValue={value}
          required
          {...attributes}
        >
          <option value="" hidden>
            {placeholder || `Pilih ${label}`}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 hidden items-center px-5 text-xs text-gray-400 lg:flex">
          <ChevronDown className="h-4 w-4" />
        </span>
      </div>
      {error && <h5 className="mt-2 cursor-default text-sm text-red-500">{error}</h5>}
    </fieldset>
  );
}