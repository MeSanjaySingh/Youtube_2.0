import React from "react";

const LiveChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start p-1  gap-1 ">
      <img
        alt="profile-logo"
        className="w-7 h-7 rounded-full"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
      ></img>
      <span className="px-2 font-semibold w-[180px]">{name}</span>
      <span className="w-full">{message}</span>
    </div>
  );
};

export default LiveChatMessage;
