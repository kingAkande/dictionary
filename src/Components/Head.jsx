import React from "react";
import book from "../assets/Shape.png";
import moon from "../assets/iconoir_half-moon.png";
import Switch from "./Switch";


const Head = () => {
  return (
    <div className="w-[736.99px] h-[36.5px] border flex justify-between items-center ">
      <div>
        <img className="h-[36px]" src={book} alt="book logo" />
      </div>
      <div className=" flex gap-3">
        <select className="font-bold" name="" id="">
          <option className="" value="">Sans Serif</option>
          <option value="">Serif</option>
          <option className="" value="">Mono</option>
        </select>
        <span>|</span>
        <div className="flex gap-3 items-center">
          <Switch containercolor="bg-[#A445ED]" />

          <img src={moon} alt="moon logo" />
        </div>
      </div>
    </div>
  );
};

export default Head;
