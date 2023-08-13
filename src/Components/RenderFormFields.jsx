import React from "react";
import FormField from "./FormField";
import { Field, ErrorMessage } from "formik";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function RenderFormFields({
  errors,
  touched,
  activeTab,
  setFieldValue,
  initialValues,
}) {
  const SelectField = ({ id, name, label, options, errors, touched }) => (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <Field
        id={id}
        name={name}
        className={`${
          errors[name] && touched[name] ? "border-red-500" : "border-gray-300"
        } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500`}
        as="select"
      >
        <option value="">{`Select ${label}`}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );

  const InputWithButton = ({
    id,
    label,
    placeholder,
    buttonLabel,
    errors,
    touched,
    
  }) => (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-row">
        <input
          type="text"
          id={id}
          name={id}
          className={`${
            errors[id] && touched[id] ? "border-red-500" : "border-gray-300"
          } bg-gray-50 border text-gray-900 text-sm rounded-sm focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500`}
          placeholder={placeholder}
        />
        <button
          type="button"
          className="p-2.5 px-4 bg-blue-200 text-blue-800 rounded-sm"
        >
          {buttonLabel}
        </button>
      </div>
      <ErrorMessage
        name={id}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );

  switch (activeTab) {
    case 0:
      return (
        <div>
          <h3 className="text-2xl font-semibold pb-3 text-gray-600">
            Basic Information
          </h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <FormField
                id="name"
                name="name"
                label="Name"
                placeholder="Your Name"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
              />
            </div>
            <div>
              <FormField
                id="email"
                name="email"
                label="Email address"
                placeholder="john.doe@company.com"
                type="email"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <FormField
                id="mobileNumber"
                name="mobileNumber"
                label="Mobile Number"
                placeholder="Mobile Number"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
              />
            </div>
            <div>
              <FormField
                id="college"
                name="college"
                label="College"
                placeholder="College"
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
              />
            </div>
          </div>
          <FormField
            id="profilePhoto"
            name="profilePhoto"
            label="Profile Photo"
            type="file"
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
            additionalClassName="mb-6"
          />
        </div>
      );
    case 1:
      return (
        <div>
          <h3 className="text-2xl font-semibold pb-3 text-gray-600">
            Additional Information
          </h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <SelectField
                id="admission"
                name="admission"
                label="Admission"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
                errors={errors}
                touched={touched}
              />
            </div>
            <div>
              <SelectField
                id="service"
                name="service"
                label="Service"
                options={[
                  { value: "service1", label: "Service 1" },
                  { value: "service2", label: "Service 2" },
                ]}
                errors={errors}
                touched={touched}
              />
            </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <InputWithButton
                id="courseAffiliation"
                label="Course Afiliation"
                placeholder="Course Affiliation"
                buttonLabel={<FaPlus />}
                errors={errors}
                touched={touched}
              />
            </div>
            <div>
              <InputWithButton
                id="entranceRequired"
                label="Entrance Required"
                placeholder="Entrance Required"
                buttonLabel={<FaPlus />}
                errors={errors}
                touched={touched}
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <InputWithButton
                id="documentRequired"
                label="Document Required"
                placeholder="Document Required"
                buttonLabel={<FaPlus />}
                errors={errors}
                touched={touched}
              />
            </div>
            <div>
              <InputWithButton
                id="specialization"
                label="Specialization"
                placeholder="Specialization"
                buttonLabel={<FaPlus />}
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          <div className="py-3">
            <h3 className="text-lg my-3">Intakes</h3>
            <div className="flex flex-col w-full border-t-2 border-b-2 border-dotted py-3 pb-6">
              <div className="flex flex-col md:flex-row ">
                <div className="flex flex-col md:w-1/2">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Intake <span className="text-red-500">*</span>
                  </p>
                  <div className="flex md:min-h-[130px] justify-center items-center p-3 gap-2 flex-row bg-[#f9f8fd] border border-gray-200">
                    <button className="py-3 px-4 bg-red-300 text-red-600 rounded-sm">
                      <MdDelete />
                    </button>
                    <Field
                      as="select"
                      id="intake"
                      name="intake"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">Select Month</option>
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
                <div className="flex flex-col md:w-1/2 py-3 md:py-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    duration <span className="text-red-500">*</span>
                  </p>
                  <div className="flex md:min-h-[130px] justify-center gap-2 items-center p-3 flex-col bg-[#f9f8fd] border border-gray-200">
                    <div className="flex flex-row w-full gap-2">
                      <input
                        type="number"
                        id="duration1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Duration"
                        min="1"
                      />
                      <button className="3 rounded-sm px-4 bg-blue-200 text-blue-800">
                        <FaPlus />
                      </button>
                      <button className="p-3 rounded-sm px-4 bg-red-300 text-red-600">
                        <MdDelete />
                      </button>
                    </div>
                    <div className="flex flex-row w-full gap-2">
                      <input
                        type="number"
                        id="duration2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Duration"
                        min="1"
                      />
                      <button className="3 rounded-sm px-4 bg-blue-200 text-blue-800">
                        <FaPlus />
                      </button>
                      <button className="p-3 rounded-sm px-4 bg-red-300 text-red-600">
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="px-2 py-2 bg-blue-200 text-blue-800 md:w-[120px] my-4  rounded-sm font-bold items-center justify-center flex">
                <FaPlus /> &nbsp; Add Row
              </button>
            </div>
          </div>

          <div className="py-3">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-lg my-3">Cource tag</h3>
              <button className="px-2 py-2 bg-blue-200 text-blue-800 md:w-[180px] my-4  rounded-sm font-bold items-center justify-center flex">
                <FaPlus /> &nbsp; New Cource Tag
              </button>
            </div>
            <div className="flex flex-col w-full ">
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <SelectField
                    id="tag"
                    name="tag"
                    label="tag"
                    options={[
                      { value: "tag1", label: "tag 1" },
                      { value: "tag2", label: "tag 2" },
                    ]}
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    description <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-row gap-2">
                    <input
                      type="text"
                      id="description"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type Description"
                    ></input>
                    <button className="p-2.5 px-4 bg-red-300 text-red-600 rounded-sm">
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
              <button className="px-2 py-2 bg-blue-200 text-blue-800 md:w-[120px] my-4  rounded-sm font-bold items-center justify-center flex">
                <FaPlus /> &nbsp; Add Row
              </button>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <h3 className="text-2xl font-semibold pb-3 text-gray-600">
            Eligibility and Syllabus
          </h3>
          <h1>test</h1>
        </div>
      );
    case 3:
      return (
        <div>
          <h3 className="text-2xl font-semibold pb-3 text-gray-600">
            Fee and Scholarship
          </h3>
          <h1>test</h1>
        </div>
      );
    default:
      return null;
  }
  return;
}

export default RenderFormFields;
