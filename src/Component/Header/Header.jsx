import React, { useEffect, useState } from "react";

// import Youtube_Logo from "../../assets/Youtube.png";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import { Button } from "../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  /** CACHE::
   * {
   *   "iphone":["iphone 11","iphone 15"]
   * }
   */

  useEffect(() => {
    // API CALL ==>
    // Make an api call after every key press
    // but if the diference between 2 API class is < 200ms
    // decline the API call
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    // clear the timeout
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API Call made :: " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // Update Cahce ::
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const dispatch = useDispatch();
  const toggleNavHandler = () => {
    dispatch(toggleNav());
  };

  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap20 justify-between pt-2 mb-6 mx-4 ">
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={toggleNavHandler}
          className="transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;"
          variant="ghost"
          size="icon"
        >
          <Menu />
        </Button>
        <img
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          className="w-28 h-10"
        ></img>
      </div>
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex "
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => {
              setShowFullWidthSearch(false);
            }}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex relative flex-grow max-w-[600px]">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
            type="text"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          ></input>
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
            <Search />
          </Button>
          {showSuggestions && (
            <div className="md:w-[520px] w-[200px] rounded-md shadow-md left-2 shadow-blue-300 md:left-5 absolute top-11 z-50  bg-white ">
              <ul className="flex flex-col  ">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="flex items-center px-3 py-1 gap-1  hover:bg-gray-200 "
                  >
                    <Search size={15} /> {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => {
            setShowFullWidthSearch(true);
          }}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default Header;
