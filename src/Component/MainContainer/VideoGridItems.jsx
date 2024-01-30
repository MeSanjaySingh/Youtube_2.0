import React from "react";

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

const VideoGridItems = ({ info }) => {
  // console.log(info);
  const { snippet, statistics, viewCount } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="flex flex-col gap-2">
      <a className="relative aspect-video">
        <img
          alt="thumbnail"
          src={thumbnails.medium.url}
          className="block w-full h-full object-cover rounded-xl transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1); duration-150 hover:rounded-none hover:shadow-lg cursor-pointer"
        ></img>
      </a>
      <div className="flex gap-2">
        <a className="flex-shrink-0">
          <img
            alt="profile-logo"
            className="w-10 h-10 rounded-full"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          ></img>
        </a>
        <div className="flex flex-col">
          <h3 className="font-bold">{title}</h3>

          <div className="text-gray-500 text-sm flex gap-5">
            <h3 className="text-gray-500 text-sm">{channelTitle}</h3>•
            <h3>{VIEW_FORMATTER.format(`${statistics?.viewCount}`)} Views</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 relative scale-100  border-gray-500 border-2 rounded-md">
      <h5 className="font-bold right-2 stroke-1 stroke-cyan-500 absolute z-10 font-mono text-white">
        Youtube Ad
      </h5>
      <VideoGridItems info={info} />
    </div>
  );
};

export default VideoGridItems;
