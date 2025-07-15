import React, { useState } from "react";
import book from "../assets/Shape.png";
import moon from "../assets/iconoir_half-moon.png";
import Switch from "./Switch";
import rectangle from "../assets/Rectangle.png"

const Head = () => {
  const [fonts , setFonts] = useState({});
  
  return (
    <div className="w-[736.99px] h-[36.5px] flex justify-between items-center ">
      <div>
        <img className="h-[36px]" src={book} alt="book logo" />
      </div>
      <div className=" flex gap-3">
    
        <div className="relative ">
          <select className="appearance-none  pr-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Sans Serif</option>
            <option>Serif</option>
            <option>Mono</option>
          </select>
          {/* <!-- Custom arrow using CSS --> */}
          <div className="absolute inset-y-0 right-0 flex items-center  pointer-events-none">
            <svg
              className="w-4 h-4 mb-2 text-[#A445ED]"
              fill="none"
              stroke="#A445ED"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
        <img src={rectangle} alt="rectanglar shape" />
        <div className="flex gap-3 items-center">
          <Switch containercolor="bg-[#A445ED]" />

          <img src={moon} alt="moon logo" />
        </div>
      </div>
    </div>
  );
};

export default Head;
