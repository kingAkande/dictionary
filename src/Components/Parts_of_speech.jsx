import React from "react";
const Parts_of_speech = ({ Parts_of_speech, children, styl }) => {
  return (
    <div className=" ">
      <div className={`flex items-center justify-between mb-8 ${styl}`}>
        <h1 className="font-bold text-xl md:text-3xl lg:text-3xl ">{Parts_of_speech}</h1>
        <svg
          className="w-[266px] md:w-[608px] lg:w-[656px]"
          width="656"
          height="2"
          viewBox="0 0  16"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="656 " height="0.5" fill= {"#979797"} />
        </svg>
      </div>
      <div className=" ">
        <h1 className="text-xl md:text-2xl lg:text-2xl text-[#757575] ">Meaning</h1>
        {children}
      </div>
    </div>
  );
};

export default Parts_of_speech;
