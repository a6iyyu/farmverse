import { ChangeEvent, useEffect, useState } from "react";
import { Textarea as ITextarea } from "@/types/form";

// prettier-ignore
export default function Textarea({ error, label, maxLength, name, placeholder, value = "", ...attributes}: ITextarea) {
  const [countCharacter, setCountCharacter] = useState((value ?? "").toString().length);

  useEffect(() => {
    setCountCharacter((value ?? "").toString().length);
  }, [value]);

  return (
    <fieldset className="flex w-full flex-col justify-between space-y-4">
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="font-meidium">
          {label}
        </label>
        <h6 className="text-sm">
          {countCharacter} / {maxLength}
        </h6>
      </div>
      <div className="relative text-gray-500">
        <textarea
          name={name}
          id={name}
          rows={4}
          placeholder={placeholder}
          defaultValue={value}
          maxLength={maxLength}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCountCharacter(e.target.value.length)}
          className="w-full resize-none rounded-md border px-4 py-2 text-sm"
          {...attributes}
        />
      </div>
      {error && <h5 className="mt-2 cursor-default text-sm text-red-500">{error}</h5>}
    </fieldset>
  );
}