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
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import RenderFormFields from "./RenderFormFields";
import { useFormikContext } from "formik";

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
    mobileNumber: Yup.string()
      .matches(/^[0-9]*$/, "Mobile number must contain only digits")
      .required("Mobile number is required"),
    college: Yup.string().required("College is required"),
  }),
  Yup.object().shape({
    admission: Yup.string().required("Admission is required"),
    service: Yup.string().required("Serviece is required"),
    documentRequired: Yup.string().required("Document is required"),
    specialization: Yup.string().required("Specialization is required"),
    tag: Yup.string().required("Serviece is required"),
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
    admission: "",
    service: "",
    courseAffiliation: "",
    entranceRequired: "",
    documentRequired: "",
    specialization: "",
    tag: "",
    description: "",
    duration: [1, 1],
  },
];


const FormUser = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const formik = useFormikContext(); 


  const handlePrev = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
      setCurrentStep(currentStep - 1);
    }
  };
  const handleNext = () => {
    if (activeTab < iconsData.length - 1) {
      setActiveTab(activeTab + 1);
      setCurrentStep(currentStep + 1);
      console.log("Form values after clicking Next:", formik.values); 
    }
  };
  
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Values:", values);
    setSubmitting(false);
    handleNext();
  };
  
  

  return (
    <div className="flex flex-col  max-w-5xl m-auto pt-10 px-4">
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
              <RenderFormFields
                errors={errors}
                touched={touched}
                activeTab={activeTab}
                setFieldValue={setFieldValue}
              />
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
