import React, { useState } from "react";
import {
  FaSave,
  FaTrophy,
  FaArrowRight,
  FaArrowLeft,
  FaPlus,
} from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { BsFillFileEarmarkRichtextFill } from "react-icons/bs";
import { GiBanknote } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const iconsData = [
  {
    title: <AiFillFileText />,
    content: "Basic Information",
  },
  {
    title: <BsFillFileEarmarkRichtextFill />,
    content: "Additional Information",
  },
  {
    title: <FaTrophy />,
    content: "Eligibility and Syllabus",
  },
  {
    title: <GiBanknote />,
    content: "Fee and Scholarship",
  },
];

const validationSchema = [
  Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    profilePhoto: Yup.string().required("Profile photo is required"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]*$/, "Mobile number must contain only digits")
      .required("Mobile number is required"),
    college: Yup.string().required("College is required"),
  }),
  Yup.object().shape({
    additionalField1: Yup.string().required("Field is required"),
    additionalField2: Yup.string().required("Field is required"),
    additionalField3: Yup.string().required("Field is required"),
    // Add validation schema for Additional Information
  }),
  Yup.object().shape({
    eligibilityField1: Yup.string().required("Field is required"),
    eligibilityField2: Yup.string().required("Field is required"),
    eligibilityField3: Yup.string().required("Field is required"),
    // Add validation schema for Eligibility and Syllabus
  }),
  Yup.object().shape({
    feeField1: Yup.string().required("Field is required"),
    feeField2: Yup.string().required("Field is required"),
    feeField3: Yup.string().required("Field is required"),
    // Add validation schema for Fee and Scholarship
  }),
];

const initialValues = [
  {
    name: "",
    email: "",
    profilePhoto: "",
    mobileNumber: "",
    college: "",
  },
  {
    Admission: "",
    serviece: "",
    CourceAfiliation: "",
    EntranceRequired: "",
    DocumentRequired: "",
    Specialization: "",
    tag: "",
    description: "",
  },
  {
    eligibilityField1: "",
    eligibilityField2: "",
    eligibilityField3: "",
  },
  {
    feeField1: "",
    feeField2: "",
    feeField3: "",
  },
];

const FormUser = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (activeTab < iconsData.length - 1) {
      setActiveTab(activeTab + 1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Values:", values);

    setSubmitting(false);
    handleNext();
  };

  const renderFormFields = ({ values, errors, touched, setFieldValue }) => {
    switch (activeTab) {
      case 0:
        return (
          <div>
            <h3 className="text-2xl font-semibold pb-3 text-gray-600">
              Basic Information
            </h3>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`${
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-gray-300"
                  } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500`}
                  placeholder="Your Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address <span className="text-red-500">*</span>
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`}
                  placeholder="john.doe@company.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  className={`${
                    errors.mobileNumber && touched.mobileNumber
                      ? "border-red-500"
                      : "border-gray-300"
                  } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500`}
                  placeholder="Mobile Number"
                />
                <ErrorMessage
                  name="mobileNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="college"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  College <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  id="college"
                  name="college"
                  className={`${
                    errors.college && touched.college
                      ? "border-red-500"
                      : "border-gray-300"
                  } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500`}
                  placeholder="College"
                />
                <ErrorMessage
                  name="college"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div class="mb-6">
              <label
                htmlFor="profilePhoto"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Profile Photo
              </label>
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("profilePhoto", event.currentTarget.files[0]);
                }}
                className={`${
                  errors.profilePhoto && touched.profilePhoto
                    ? "border-red-500"
                    : "border-gray-300"
                } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              <ErrorMessage
                name="profilePhoto"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3 className="text-2xl font-semibold pb-3 text-gray-600">
              Additional Information
            </h3>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Admission <span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  id="admission"
                  name="admission"
                  className={`${
                    errors.admission && touched.admission
                      ? "border-red-500"
                      : "border-gray-300"
                  } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500`}
                >
                  <option value="">Select Admission</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  {/* Add more options */}
                </Field>
                <ErrorMessage
                  name="admission"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  serviece <span className="text-red-500">*</span>
                </label>
                <Field
                  as="select"
                  id="services"
                  name="services"
                  className={`${
                    errors.services && touched.services
                      ? "border-red-500"
                      : "border-gray-300"
                  } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500`}
                >
                  <option value="">Select Services</option>
                  <option value="service1">Service 1</option>
                  <option value="service2">Service 2</option>
                  {/* Add more options */}
                </Field>
                <ErrorMessage
                  name="services"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cource Afiliation
                </label>
                <div className="flex flex-row">
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required
                  ></input>
                  <button className="p-2.5 px-4 bg-red-300 text-red-600 rounded-sm">
                    <MdDelete />
                  </button>
                </div>
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Entrance Required
                </label>
                <div className="flex flex-row">
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required
                  ></input>
                  <button className="p-2.5 px-4 bg-red-300 text-red-600 rounded-sm">
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Document Required
                </label>
                <div className="flex flex-row">
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required
                  ></input>
                  <button className="p-2.5 px-4 bg-red-300 text-red-600 rounded-sm">
                    <MdDelete />
                  </button>
                </div>
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Specialization
                </label>
                <div className="flex flex-row">
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required
                  ></input>
                  <button className="p-2.5 px-4 bg-red-300 text-red-600 rounded-sm">
                    <MdDelete />
                  </button>
                </div>
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
                  <div className="flex flex-col md:w-1/2 py-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      duration <span className="text-red-500">*</span>{" "}
                    </p>
                    <div className="flex md:min-h-[130px] justify-center gap-2 items-center p-3 flex-col bg-[#f9f8fd] border border-gray-200">
                      <div className="flex flex-row w-full gap-2">
                        <input
                          type="email"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="john.doe@company.com"
                          required
                        ></input>
                        <button className="3 rounded-sm px-4 bg-blue-200 text-blue-800">
                          <FaPlus />
                        </button>
                        <button className="p-3 rounded-sm px-4 bg-red-300 text-red-600">
                          <MdDelete />
                        </button>
                      </div>
                      <div className="flex flex-row w-full gap-2">
                        <input
                          type="email"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="john.doe@company.com"
                          required
                        ></input>
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
                <button className="px-2 py-2 bg-blue-200 text-blue-800 md:w-[120px] my-4  rounded-sm font-bold items-center justify-center flex">
                  <FaPlus /> &nbsp; Add Row
                </button>
              </div>
              <div className="flex flex-col w-full ">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tag <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                    ></input>
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
                        type="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john.doe@company.com"
                        required
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
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                ></input>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-2xl font-semibold pb-3 text-gray-600">
              Fee and Scholarship
            </h3>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                ></input>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-7xl m-auto pt-10 px-4">
      <div className="flex flex-col pb-3 md:flex-row items-center justify-between border-b-2 border-gray-200 px-4">
        <div className="flex flex-row items-center w-full justify-between sm:justify-start">
          <header className="p-2 text-left  text-lg sm:text-2xl text-gray-700 font-semibold mr-5">
            Course Creation
          </header>
          <span className="px-1 flex flex-row rounded-lg md:py-1  text-[10px] md:text-[12px] text-gray-500 bg-gray-200">
            Step {currentStep} of {iconsData.length}
          </span>
        </div>
        <div className="flex flex-row justify-end w-full">
          <span className="px-2 py-1 bg-[#0a2896] text-white  text-[10px] md:text-sm rounded-sm flex flex-row items-center gap-2">
            <FaSave />
            Save as Draft
          </span>
        </div>
      </div>

      <div className="flex justify-center  mt-8 gap-3 md:gap-9 ">
        {iconsData.map((icon, index) => (
          <div className="flex flex-col items-center justify-center">
            <div
              key={index}
              className={`flex flex-col items-center w-10 h-10 md:w-16 md:h-16 justify-center   cursor-pointer ${
                activeTab === index
                  ? "bg-[#e4eaff] text-[#002274]"
                  : "bg-gray-200 text-[#697681]"
              } rounded-full mx-2`}
              onClick={() => {
                setActiveTab(index);
                setCurrentStep(index + 1);
              }}
            >
              <div className=" text-[0.8] md:text-[1.5rem]">{icon.title}</div>
            </div>
            <div
              className={`text-[10px] md:text-sm text-center mt-3 ${
                activeTab === index ? " text-[#002274]" : " text-[#697681]"
              }`}
            >
              {icon.content}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 md:mt-12">
        <Formik
          initialValues={initialValues[activeTab]}
          validationSchema={validationSchema[activeTab]}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isSubmitting, setFieldValue }) => (
            <Form>
              {renderFormFields({ values, errors, touched, setFieldValue })}
              <div className="flex justify-end gap-2 p-4">
                <button
                  className={`px-4 py-2 flex items-center gap-2 border border-gray-500 text-[#0a2896] rounded cursor-pointer hover:bg-gray-200 ${
                    activeTab === 0 ? "bg-gray-300" : "bg-white"
                  }`}
                  disabled={activeTab === 0}
                  onClick={handlePrev}
                >
                  <FaArrowLeft /> Prev
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 flex items-center gap-2 bg-[#0a2896] text-white rounded cursor-pointer hover:bg-[#0a2896bc] ${
                    activeTab === iconsData.length - 1
                      ? "bg-[#0a2896bc]"
                      : "bg-[#0a2896]"
                  } active:bg-blue-800`}
                  disabled={isSubmitting || activeTab === iconsData.length - 1}
                >
                  Next <FaArrowRight />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormUser;
