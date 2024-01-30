import React, { useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { categories } from "../Body/Home";

const MainContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="max-h-screen max-w-screen no-scrollbar md:overflow-auto  bg-white z-20 pb-4 ">
      <div className=" hidden md:block sticky top-0 bg-white z-40 pb-4">
        <ButtonList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <VideoContainer />
    </div>
  );
};

export default MainContainer;
