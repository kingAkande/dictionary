import React, { useState } from "react";
// import moon from "../assets/iconoir_half-moon.png";

const Switch = () => {

  const [checked, setChecked] = useState(false);

    function handlecheck(){
        setChecked((checked)=> !checked)
    }
   
  return (
    <div className= 'p-6'>

      <div onClick={handlecheck} className= "bg-[#A445ED] w-8 h-4 pl-0.5 rounded-2xl flex items-center" >
        <button className = {`w-3 h-3 rounded-full bg-[#FFFFFF] ${checked ? 'translate-x-full' : 'translate-x-0'}`}></button>
      </div>
    </div>
  );
};

export default Switch;


//className={`w-3 h-3 rounded-full bg-[#FFFFFF] ${checked ? 'translate-x-full' : 'translate-x-0'}`}