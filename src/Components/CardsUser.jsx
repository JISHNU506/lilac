import React from "react";
import { FaPencilAlt, FaGraduationCap } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { TiMail } from "react-icons/ti";
import logoProfile from "../assets/logoProfile.png";
import { BiCheck } from "react-icons/bi";



function CardSection({ icon, text }) {
  return (
    <div className="flex flex-row items-center border-b-2 border-gray-200 p-4">
      {icon}
      <span className="text-base font-light text-gray-700 w-[80%]">{text}</span>
    </div>
  );
}

function CardsUser({userData}) {
  return (
    <div className="flex justify-center items-center min-h-[50vh] bg-[#f7f6fd]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {userData.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md min-w-[180px] md:w-[300px] md:min-h-[300px]"
          >
            <div className="flex flex-col border-b-2 border-gray-200 p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 relative">
                  <img
                    className="w-14 h-14 rounded-full relative"
                    src={user.img}
                    alt={user.name}
                  />
                  {user.isApplied && (
                    <div className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 text-green-500  bg-green-100 rounded-full w-5 h-5 flex justify-center items-center">
                    <BiCheck className="text-base text-green-500 font-extrabold"/>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">
                    {user.name}
                  </p>
                  <p className="text-[13px] text-gray-700 truncate dark:text-gray-400">
                    {user.id}
                  </p>
                </div>{" "}
                {user.isApplied ? (
                  <div className="inline-flex items-center justify-center cursor-pointer text-base font-semibold w-[35px] h-[35px] rounded-[50%] bg-blue-200">
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
              text={user.mobileNumber}
            />
            <CardSection
              icon={<TiMail className="mr-3 text-xl w-[20%]" />}
              text={user.email}
            />
            <CardSection
              icon={<FaGraduationCap className="mr-3 text-xl w-[20%]" />}
              text={user.college}
            />
            <div className="flex flex-row items-center border-b-2 border-gray-200 p-4 justify-between">
              <span className=" text-sm font-medium w- px-2 rounded-lg ml-2 text-[#60aac5] py-1 bg-[#e5f4fb]">
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
