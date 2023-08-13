import React, { useState } from "react";
import Comment from "./Coment";

function Comments() {
  const [newCommentText, setNewCommentText] = useState("");
  const [commentsNow, setCommentsNow] = useState([]);

  const [comments, setComments] = useState([
    {
      avatarSrc:
        "https://webdesigndev.com/wp-content/uploads/2018/04/20-Novotone.jpg",
      author: "John Doe",
      date: "1 week ago",
      isCurrent: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatum voluptatem quam quae incidunt error nihil nulla autem omnis delectus pariatur, in atque architecto voluptate voluptatibus. Quidem molestiae ratione ipsum.",
    },
    {
      avatarSrc:
        "https://cdn-7.motorsport.com/images/amp/0RrLLzg0/s1000/lewis-hamilton-mercedes-amg-1.jpg",
      author: "Roshan Karthik",
      date: "1 week ago",
      content: "Initial comment content...",
      isCurrent: false,
    },
    {
      avatarSrc:
        "https://webdesigndev.com/wp-content/uploads/2018/04/20-Novotone.jpg",
      author: "John Doe",
      date: "1 week ago",
      content: "Initial comment content...",
      isCurrent: false,
    },
  ]);
  const activities = [
    {
      avatarSrc:
        "https://webdesigndev.com/wp-content/uploads/2018/04/20-Novotone.jpg",
      name: "Edumpus",
      action: "Commented on your Photo",
      time: "1 hour ago",
    },
    {
      avatarSrc:
        "https://webdesigndev.com/wp-content/uploads/2018/04/20-Novotone.jpg",
      name: "Edumpus",
      action: "Commented on your Photo",
      time: "1 hour ago",
    },
    {
      avatarSrc:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000",
      name: "Haris Webdesign",
      action: "Approved your post",
      time: "1 hour ago",
    },
    {
      avatarSrc:
        "https://webdesigndev.com/wp-content/uploads/2018/04/20-Novotone.jpg",
      name: "Jennifer Lopez",
      action: "Replied your post",
      time: "1 hour ago",
    },
    {
      avatarSrc:
        "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg?w=2000",
      name: "Jhon Do",
      action: "Commented on your post",
      time: "1 hour ago",
    },
  ];

  const handleCommentDelete = (index) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };
  const onDeleteNow = (index) => {
    const newComments = commentsNow.filter((_, i) => i !== index);
    setCommentsNow(newComments);
  };

  return (
    <div className="container bg-[#f7f6fd] md:pt-16">
      <div className="bg-white rounded-md shadow-md max-w-5xl m-auto p-4">
        <div className="pb-10">
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <img
                src="https://webdesigndev.com/wp-content/uploads/2018/04/20-Novotone.jpg"
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <span className="font-semibold">John Doe</span>
                <span className="block text-sm text-gray-500">1 hour ago</span>
              </div>
            </div>
            <p className="mt-4 md:pr-10">
              Dear Students!\nLorem ipsum dolor sit amet, consectetur adipiscing
              elit...
            </p>
            <img
              src="https://www.campusfrance.org/sites/default/files/styles/mobile_visuel_principal_page/public/medias/images/2017-10/bourses%20et%20possibilit%C3%A9s%20de%20financement%20%28corps%20du%20texte%29_etudiants.jpg?itok=y8yzsOTe"
              alt=""
              className="mt-4 w-full h-[70vh] object-cover rounded"
            />
          </div>
          <div className="bg-gray-100 px-3 w-[145px]  py-1 rounded-lg text-[12px] text-gray-500">
            7 Comments 2 replies
          </div>
          <div className="flex flex-row mt-4">
            <img
              src="https://webdesigndev.com/wp-content/uploads/2018/04/20-Novotone.jpg"
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-grow ml-4">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Add a comment..."
                rows="3"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
              />
              <button
                className="mt-2 text-gray-400 px-4 text-sm py-2 rounded relative -top-12"
                onClick={() => {
                  if (newCommentText.trim() !== "") {
                    const newComment = {
                      avatarSrc:
                        "https://webdesigndev.com/wp-content/uploads/2018/04/20-Novotone.jpg",
                      author: "Jhon Doe",
                      date: "Just now",
                      content: newCommentText,
                      isCurrent: true,
                    };

                    setCommentsNow([...commentsNow,newComment])
                    setNewCommentText("");
                  }
                }}
              >
                Post
              </button>
            </div>
          </div>

          <h3 className="text-base text-gray-500 ">View more 5 Comments</h3>

          {commentsNow.map((comment, index) => (
            <Comment
              key={index}
              avatarSrc={comment.avatarSrc}
              author={comment.author}
              date={comment.date}
              content={comment.content}
              isCurrent={comment.isCurrent}
              onDeleteNow={() => onDeleteNow(index)}
            />
          ))}
           <Comment
             key={10}
              avatarSrc="https://cdn-7.motorsport.com/images/amp/0RrLLzg0/s1000/lewis-hamilton-mercedes-amg-1.jpg"
              author="Roshan Karthik"
              date="1 week ago"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatum voluptatem quam quae incidunt error nihil nulla autem omnis delectus pariatur, in atque architecto voluptate voluptatibus. Quidem molestiae ratione ipsum."
              isCurrent="true"
              onDeleteNow={() => onDeleteNow(10)}
            />

          <div className="md:w-[90%] ml-2 md:m-auto">
            <h3 className="text-[12px] py-2 ml-3 text-gray-500  font-bold">
              3 Repalys
            </h3>
            {comments.map((comment, index) => (
              <Comment
                key={index}
                avatarSrc={comment.avatarSrc}
                author={comment.author}
                date={comment.date}
                content={comment.content}
                onDelete={() => handleCommentDelete(index)}
              />
            ))}
          </div>
          <div className="flex flex-col md:py-4 md:px-5 pt-10 rounded-lg overflow-hidden">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`flex items-center cursor-pointer gap-4 border-1 border-gray-300 md:px-3 py-4 ${
                  index === 0 ? "bg-blue-50" : "bg-white"
                } transition-all duration-300 ease-in-out transform hover:bg-blue-50 hover:scale-[1.009]`}
              >
                <img
                  src={activity.avatarSrc}
                  alt=""
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex md:flex-row flex-col">
                    <span className="font-semibold text-sm md:text-md">
                      {activity.name}
                    </span>
                    <span className="font-light text-[13px] md:ml-4 text-gray-400">
                      {activity.action}
                    </span>
                  </div>

                  <span className="block text-sm text-gray-500">
                    {activity.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
