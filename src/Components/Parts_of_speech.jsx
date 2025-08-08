import React from "react";
const Parts_of_speech = ({ Parts_of_speech, children, styl }) => {
  return (
    <div className=" ">
      <div className={`flex items-center justify-between mb-8 ${styl}`}>
        <h1 className="w-[57px] h-[29px] text-2xl ">{Parts_of_speech}</h1>
        <svg
          width="656"
          height="2"
          viewBox="0 0  16"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="656 " height="2" fill= {"#979797"} />
        </svg>
      </div>
      <div className="w-[721.02px] ">
        <h1 className="text-2xl text-[#757575] w-[82px]  ">Meaning</h1>
        {children}
      </div>
    </div>
  );
};

export default Parts_of_speech;
