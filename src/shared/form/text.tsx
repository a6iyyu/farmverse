import { Text as IText } from "@/types/form";

// prettier-ignore
export default function Text({ error, icon, label, name, placeholder, value, ...attributes }: IText) {
  return (
    <fieldset className="flex w-full flex-col justify-between space-y-4">
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
          className={`w-full appearance-none rounded-lg border-2 py-2.5 pr-4 pl-14 transition-all duration-200 focus:outline-none ${error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-[#1a4167] focus:ring-[#1a4167]/20"}`}
          defaultValue={value}
          {...attributes}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </fieldset>
  );
}