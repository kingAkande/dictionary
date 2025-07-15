import React, { useState } from "react";
import book from "../assets/Shape.png";
import moon from "../assets/iconoir_half-moon.png";
import Switch from "./Switch";
import rectangle from "../assets/Rectangle.png"
import { Link } from "react-router-dom";

const Head = ({ onChooseFont,  onfonts , onsetFont}) => {


  // const availableFonts = [{name:"" , Link: ""}]

  
  // const [fontSans , setFontSans] = useState("font-sans")
  
  const [fontSerif , setFontSerif] = useState("font-serif")
  
  const [fontmono , setFontMono] = useState("font-mono");


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
          <select value={onfonts} onClick={onChooseFont} onChange={(e)=>onsetFont(e.target.value)} className="appearance-none  pr-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option className="font-sans">Sans Serif</option>
            <option value = {fontSerif} onChange={(e)=>setFontSerif(e.target.value)} className="font-serif ">Serif</option>
            <option value = {fontmono} onChange={(e)=>setFontMono(e.target.value)} className="font-mono">Mono</option>
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
