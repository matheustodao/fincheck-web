import { useId } from "react";

interface InputProps extends React.ComponentProps<"input"> {}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const elementId = useId();
  const customElementId = id || `${elementId}-${name ? name : placeholder}`;

  return (
    <div className="relative w-full">
      <input
        {...props}
        className="bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full ring-teal-700 ring-offset-0 focus:outline-teal-700 focus:outline-[0.5px] pt-4 peer placeholder-shown:pt-0"
        id={customElementId}
        name={name}
        placeholder=" "
      />

      <label
        htmlFor={customElementId}
        className="absolute pointer-events-none left-[13px] top-2 text-gray-700 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all peer-focus:text-teal-900"
      >
        {placeholder}
      </label>
    </div>
  );
}
