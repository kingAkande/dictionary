import React, { useState } from "react";
import book from "../assets/Shape.png";
import Switch from "./Switch";
import rectangle from "../assets/Rectangle.png";
import { Link } from "react-router-dom";

const Head = ({onChecked ,onSetChecked,  onChooseFont, onfonts, onsetFont }) => {
  // const availableFonts = [{name:"" , Link: ""}]

  const [fontSans, setFontSans] = useState("font-sans");

  const [fontSerif, setFontSerif] = useState("font-serif")

  const [fontmono, setFontMono] = useState("font-mono");

  // function chooseSerif(){

  // }

  // function chooseSans(){

  // }

  // function chooseMono(){
  //   setmono((fontmono)=> !fontmono)
  // }

  return (
    <div className="w-[736.99px] h-[36.5px] flex justify-between items-center ">
      <div>
        <img className="h-[36px]" src={book} alt="book logo" />
      </div>
      <div className=" flex gap-3">
        <div className="relative ">
          <select
            value={onfonts}
            onClick={onChooseFont}
            onChange={(e) => onsetFont(e.target.value)}
            className={`appearance-none font-bold  pr-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${onChecked? "bg-[#050505]" :"" }`}
          >
            <option
              value={fontSans}
              onChange={(e) => setFontSans(e.target.value)}
              className="font-[Inter] font-bold "
            >
              Sans Serif
            </option>
            <option
              value={fontSerif}
              onChange={(e) => setFontSerif(e.target.value)}
              className="font-[Lora] font-bold "
            >
              Serif
            </option>
            <option
              value={fontmono}
              onChange={(e) => setFontMono(e.target.value)}
              className="font-[Inconsolata] font-bold"
            >
              Mono
            </option>
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
          <Switch onChecked={onChecked} onSetChecked={onSetChecked} containercolor="bg-[#A445ED]" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={` ${!onChecked ? "#979797" : "#A445ED"}`}
          >
            <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" />
          </svg>
          {/* <img src={moon} alt="moon logo" /> */}
        </div>
      </div>
    </div>
  );
};

export default Head;

//${!onChecked ? "bg-[#979797]" : "bg-[#A445ED]"}