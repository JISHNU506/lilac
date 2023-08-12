import React from "react";
import { FaPencilAlt, FaGraduationCap } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { TiMail } from "react-icons/ti";
import logoProfile from "../assets/logoProfile.png";
import { BiCheck } from "react-icons/bi";

const userData = [
  {
    id: "EDU-IND-123456",
    name: "John Doe",
    phone: "+91 1234567890",
    email: "johndoe@example.com",
    education: "BSc Computer Science",
    isApplied: true,
  },
  {
    id: "EDU-IND-987654",
    name: "Jane Smith",
    phone: "+91 9876543210",
    email: "janesmith@example.com",
    education: "MBA Marketing",
    isApplied: false,
  },
  {
    id: "EDU-IND-987654",
    name: "sebastan vetal",
    phone: "+91 9876543210",
    email: "vetal@example.com",
    education: "MBA Marketing",
    isApplied: false,
  },
];

function CardSection({ icon, text }) {
  return (
    <div className="flex flex-row items-center border-b-2 border-gray-200 p-4">
      {icon}
      <span className="text-base font-light text-gray-700 w-[80%]">{text}</span>
    </div>
  );
}

function CardsUser() {
  return (
    <div className="flex justify-center items-center min-h-[50vh] bg-[#f7f6fd]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {userData.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md min-w-[200px] md:w-[350px] md:min-h-[300px]"
          >
            <div className="flex flex-col border-b-2 border-gray-200 p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 relative">
                  <img
                    className="w-14 h-14 rounded-full relative"
                    src="data:image/jpeg;base64,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"
                    alt={user.name}
                  />
                  {user.isApplied && (
                    <div className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 text-green-500  bg-green-100 rounded-full w-5 h-5 flex justify-center items-center">
                    <BiCheck className="text-base text-green-500 font-bold"/>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-700 truncate dark:text-gray-400">
                    {user.id}
                  </p>
                </div>{" "}
                {user.isApplied ? (
                  <div className="inline-flex items-center justify-center text-base font-semibold w-[35px] h-[35px] rounded-[50%] bg-blue-200">
                    <FaPencilAlt />
                  </div>
                ) : (
                  <span className=" text-sm w- px-2 rounded-lg ml-2 text-green-500  bg-green-100">
                    new
                  </span>
                )}
              </div>
            </div>
            <CardSection
              icon={<HiPhone className="mr-3 text-xl w-[20%]" />}
              text={user.phone}
            />
            <CardSection
              icon={<TiMail className="mr-3 text-xl w-[20%]" />}
              text={user.email}
            />
            <CardSection
              icon={<FaGraduationCap className="mr-3 text-xl w-[20%]" />}
              text={user.education}
            />
            <div className="flex flex-row items-center border-b-2 border-gray-200 p-4 justify-between">
              <span className=" text-sm w- px-2 rounded-lg ml-2 text-[#60aac5] py-1 bg-[#e5f4fb]">
                {user.isApplied ? "Add Your rest Documents " : "Applied"}
              </span>
              <span className="text-base font-light text-gray-700 ">
                <img
                  src={logoProfile}
                  className="w-14 h-14 rounded-full border border-gray-200 shadow-sm"
                  alt=""
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsUser;
