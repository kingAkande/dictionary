// import React, { useState } from "react";

const Switch = ({ onChecked, onSetChecked, containercolor }) => {
  function handlecheck() {
    onSetChecked((checked) => !checked);
  }

  return (
    <div className="">
      <div
        onClick={handlecheck}
        className={`w-8 h-4 px-0.5 rounded-2xl flex items-center ${
          !onChecked ? "bg-[#979797]" : containercolor
        } hover:bg-[#A445ED]  `}
      >
        <button
          className={`w-3 h-3 rounded-full bg-[#FFFFFF] ${
            onChecked ? "translate-x-full" : "translate-x-0"
          } hover:cursor-pointer`}
        ></button>
      </div>
    </div>
  );
};

export default Switch;
