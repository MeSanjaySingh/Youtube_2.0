import React from "react";

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

const VideoGridItems = ({ info }) => {
  // console.log(info);
  // const { snippet, statistics } = info?.info;
  // const { channleTitle, title, thumbnails } = info?.snippet;
  return (
    <div className="flex flex-col gap-2">
      <a className="relative aspect-video">
        <img
          alt="thumbnail"
          src={info?.snippet?.thumbnails.medium.url}
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
          <h3 className="font-bold">{info?.snippet?.title}</h3>

          <div className="text-gray-500 text-sm flex gap-5">
            <h3 className="text-gray-500 text-sm">
              {info?.snippet?.channelTitle}
            </h3>
            •
            <h3>
              {VIEW_FORMATTER.format(`${info?.statistics?.viewCount}`)} Views
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItems;

{
  /* <li>{info?.snippet?.title}</li>
          <li>{info?.snippet?.channleTitle}</li>
          <li>{info?.statistics?.viewCount}</li> */
}
