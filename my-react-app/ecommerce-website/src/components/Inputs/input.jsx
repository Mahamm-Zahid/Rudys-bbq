import React from "react";

export default function input({
  type,
  className,
  placeholder,
  name,
  handleChange,
  ...props
}) {
  return (
    <input
      type={type}
      name={name}
      className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full
             md:w-48 p-2.5 md:mr-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${className}`}
      placeholder={placeholder}
      {...props}
      onChange={handleChange}
    />
  );
}
