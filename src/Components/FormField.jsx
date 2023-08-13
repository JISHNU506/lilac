import React from "react";
import {  Field, ErrorMessage } from "formik";

function FormField({
  id,
  name,
  label,
  placeholder,
  type = "text",
  errors,
  touched,
  setFieldValue,
  additionalClassName = "",
}) {
  return (
    <div className={additionalClassName}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      {type === "file" ? (
        <input
          type={type}
          id={id}
          name={name}
          accept="image/*"
          onChange={(event) => {
            setFieldValue(name, event.currentTarget.files[0]);
          }}
          className={`bg-gray-50 border ${
            errors[name] && touched[name] ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      ) : (
        <Field
          type={type}
          id={id}
          name={name}
          className={`${
            errors[name] && touched[name] ? "border-red-500" : "border-gray-300"
          } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500`}
          placeholder={placeholder}
        />
      )}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}

export default FormField;
