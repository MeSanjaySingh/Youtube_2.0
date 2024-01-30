import React, { useEffect, useState } from "react";

import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoGridItems, { AdVideoCard } from "./VideoGridItems";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoGridItems info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
