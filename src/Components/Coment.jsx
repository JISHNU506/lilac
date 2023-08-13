import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";

const Comment = ({ avatarSrc, author, date, content, onDelete, isCurrent,onDeleteNow }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const handleEditClick = () => {
    setEditing(true);
    setDropdownVisible(false);
  };

  const handleDeleteClick = () => {
    onDelete();
  };
  const handleDeleteClickNow = () => {
    onDeleteNow();
  };

  const handleSaveClick = () => {
    setEditing(false);
    setNewContent(newContent);
  };

  return (
    <>
      {!isCurrent && (
        <div className="flex mt-4 h-auto">
          <img
            src={avatarSrc}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-grow ml-4 p-3 border-1 max-w-[800px] border-gray-300 rounded-lg bg-blue-50 relative">
            <div className="flex justify-between">
              <div className="  font-semibold text-sm">
                {author} &nbsp;&nbsp;
                <span className="text-[12px] text-gray-400 font-medium">
                  {date}
                </span>
              </div>
              <div className="">
                <div
                  className="flex flex-col cursor-pointer gap-[2px]"
                  onClick={showDropdown}
                >
                  <div className="bg-gray-400 rounded-full w-1 h-1"></div>
                  <div className="bg-gray-400 rounded-full w-1 h-1"></div>
                  <div className="bg-gray-400 rounded-full w-1 h-1"></div>
                </div>
                {dropdownVisible && (
                  <div className="absolute top-0 right-3 mt-8">
                    <div className="flex flex-col p-2   bg-white border-1 border-gray-300 rounded-lg">
                      {!editing ? (
                        <button onClick={handleEditClick} className="px-5 text-start flex flex-row  items-center gap-2 text-sm py-2 ">
                          <BsFillPencilFill/>Edit
                        </button>
                      ) : (
                        <button onClick={handleSaveClick} className="px-5 text-start ">
                          Save
                        </button>
                      )}
                      <button onClick={handleDeleteClick} className="px-5 text-start flex flex-row items-center gap-2 text-sm py-2 ">
                       <AiTwotoneDelete/> Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {editing ? (
              <div className="flex-grow  pt-5">
                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full text-sm p-2 border border-gray-300 rounded-md"
                  rows="3"
                />
                <button
                  onClick={handleSaveClick}
                  className="mt-2 text-gray-400 px-4 text-sm py-2 rounded relative -top-12"
                >
                  Post
                </button>
              </div>
            ) : (
              <p className="my-6 leading-relaxed text-xs text-gray-600">
                {newContent}
              </p>
            )}
          </div>
        </div>
      )}
      {isCurrent && (
        <div className="flex mt-4 h-auto">
          <img
            src={avatarSrc}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-grow ml-4 p-3 border-1 border-gray-300 rounded-lg bg-blue-50 relative">
            <div className="flex justify-between">
              <div className="font-semibold text-sm">
                {author} &nbsp;&nbsp;
                <span className="text-[12px] text-gray-400 font-medium">
                {date}
                </span>
              </div>
              <div className="">
                <div
                  className="flex flex-col cursor-pointer gap-[2px]"
                  onClick={showDropdown}
                >
                  <div className="bg-gray-400 rounded-full w-1 h-1"></div>
                  <div className="bg-gray-400 rounded-full w-1 h-1"></div>
                  <div className="bg-gray-400 rounded-full w-1 h-1"></div>
                </div>
                {dropdownVisible && (
                  <div className="absolute top-0 right-3 mt-8">
                    <div className="flex flex-col items-center  p-2 bg-white border-1 border-gray-300 rounded-lg text-sm ">
                      {!editing ? (
                        <button onClick={handleEditClick} className="px-5 text-start flex flex-row  items-center py-2 gap-2">
                        <BsFillPencilFill/>Edit
                        </button>
                      ) : (
                        <button onClick={handleSaveClick} className="px-5  text-start">
                          Save
                        </button>
                      )}
                      <button onClick={handleDeleteClickNow} className="px-5 text-start flex text-sm flex-row  items-center py-2 gap-2">
                      <AiTwotoneDelete/> Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {editing ? (
              <div className="flex-grow  pt-5">
                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full text-sm p-2 border border-gray-300 rounded-md"
                  rows="3"
                />
                <button
                  onClick={handleSaveClick}
                  className="mt-2 text-gray-400 px-4 text-sm py-2 rounded relative -top-12"
                >
                  Post
                </button>
              </div>
            ) : (
              <p className="my-6 leading-relaxed text-xs text-gray-600">
                {newContent}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Comment;
