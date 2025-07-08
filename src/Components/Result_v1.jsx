import React from "react";
import playbutton from "../assets/PlayButton.png"

const Result_v1 = ({wordApi , phoneticText}) => {
  return (
    <div className="w-[737px] h-[144px] flex items-center justify-between mb-6">
        <div>

      <h1 className="font-bold font-serif text-7xl w-[293px] h-[77px]  ">{wordApi}</h1>
      <p className="mt-2 font-sans text-3xl text-[#A445ED]">{phoneticText}</p>
        </div>
      <div className="w-[73.47px] h-[75px] rounded-full bg-[#ead7f8] relative ">
        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  " src={playbutton} alt="play button" />
      </div>
    </div>
  );
};

export default Result_v1;
