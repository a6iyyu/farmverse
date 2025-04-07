import { Text as IText } from "@/types/form";

// prettier-ignore
export default function Text({icon, label, name, placeholder, value, ...attributes }: IText) {
  return (
    <fieldset className="space-y-4 flex w-full flex-col justify-between">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-gray-500">
            {icon}
          </span>
        )}
        <input
          name={name}
          id={name}
          placeholder={placeholder}
          className="appearance-none w-full rounded-lg border-2 pl-14 pr-4 py-2.5 transition-all duration-200 focus:outline-none focus:border-[#1a4167] focus:ring-2 focus:ring-[#1a4167]/20"
          defaultValue={value}
          {...attributes}
        />
      </div>
    </fieldset>
  );
}