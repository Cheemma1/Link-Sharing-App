import Image, { StaticImageData } from "next/image";

import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon: StaticImageData;
  register: any;
  error?: string;
}
const FormFields: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  icon,
  register,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="m-[0_0_0.3rem_0]  font-normal text-[0.8rem]  text-darkGrey font-sans"
      >
        {label}
      </label>
      <div
        className={`rounded-md border ${
          error ? "border-red-500" : "border-gray2"
        } bg-white flex items-center py-2 px-3 w-96`}
      >
        <Image src={icon} alt={`${label}-icon`} className="w-4 h-4" />
        <input
          type={type}
          {...register(id)}
          className="ml-2 flex-1 border-none outline-none placeholder-opacity-50"
          placeholder={placeholder}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormFields;
