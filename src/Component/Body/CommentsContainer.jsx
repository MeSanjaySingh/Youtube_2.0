import React from "react";

const commentsData = [
  {
    name: "Akshay Sharma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Sanjay Singh",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Keerti Shukla",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Rahul Vyas",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Himanshu Prajapati",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Shreya Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Ram Shukla",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Manoj Sharma",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Rahul Verma",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Diksha Raj",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Karan Shukla",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Raj Saini",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Priya Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Manoj Saini",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
];
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="relative">
      <Comment data={comment} />
      <div className="pl-5 border-l-[3px] ml-5">
        <CommentsList comments={comment.replies} />
        {/* <Comment key={index} data={comment} />
        <Comment key={index} data={comment} /> */}
      </div>
    </div>
  ));
};
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mt-5 gap-4 items-center">
      <img
        alt="profile-logo"
        className="w8 h-10 rounded-full"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
      ></img>
      <div className="">
        <h3 className="font-bold font-sans">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="md:px-7  px-2 py-3 ">
      <h1 className="text-xl font-bold font-sans">Comments</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
