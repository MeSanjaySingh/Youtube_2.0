import React, { useEffect } from "react";
import { closeNav } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = ({ info }) => {
  console.log(info);
  //const params = useParams(); // This have the empty objects
  const [searchParames] = useSearchParams();
  console.log(searchParames.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeNav());
  }, []);
  return (
    <div className=" w-full md:px-7  px-2 py-3">
      <iframe
        className="rounded-lg w-full aspect-video h-[280px] md:w-[660px] md:h-[380px] "
        src={"https://www.youtube.com/embed/" + searchParames.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="1"
      ></iframe>
      <div className=" mt-2 rounded-2xl w-full md:py-5 h-full bg-red-300">
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          placeat rem eligendi?
        </h1>
      </div>
    </div>
  );
};

export default WatchPage;
