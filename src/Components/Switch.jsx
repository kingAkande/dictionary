import React, { useState } from "react";
// import moon from "../assets/iconoir_half-moon.png";

const Switch = ({onChecked, onSetChecked, containercolor}) => {

  // const [checked, setChecked] = useState(false);

    function handlecheck(){
        onSetChecked((checked)=> !checked)
    }
   
  return (
    <div className= ''>

      <div onClick={handlecheck} className= {`w-8 h-4 px-0.5 rounded-2xl flex items-center ${!onChecked ? "bg-[#979797]" : containercolor }  `} >
        <button className = {`w-3 h-3 rounded-full bg-[#FFFFFF] ${onChecked ? 'translate-x-full' : 'translate-x-0'} hover:cursor-pointer`}></button>
      </div>
    </div>
  );
};

export default Switch;


//className={`w-3 h-3 rounded-full bg-[#FFFFFF] ${checked ? 'translate-x-full' : 'translate-x-0'}`}