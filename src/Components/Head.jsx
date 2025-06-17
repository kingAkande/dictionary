import React from "react";
import book from "../assets/Shape.png";
import moon from "../assets/iconoir_half-moon.png";

const Head = () => {
  return (
    <div className="w-[736.99px] h-[36.5px] border flex justify-between items-center ">
      <div>
        <img className="h-[36px]" src={book} alt="book logo" />
      </div>
      <div className=" flex gap-3">
        <select name="" id="">
          <option value="">Sans Serif</option>
          <option value="">Serif</option>
          <option value="">Mono</option>
        </select>
        <span>|</span>
        <div className="flex gap-3 items-center">
          <div className="w-8 h-4 pl-0.5 border rounded-2xl flex items-center ">
            <button className="w-3 h-3 border rounded-full "></button>
          </div>
          <img src={moon} alt="moon logo" />
        </div>
      </div>
    </div>
  );
};

export default Head;
