import React from 'react'
import rectangleimage2 from "../assets/Rectangle2.png";

const Parts_of_speech = ({Parts_of_speech,children, styl}) => {
  return (
    <div className=''>
              <div className={`flex items-center justify-between mb-8 ${styl}`}>
                <h1 className="w-[57px] h-[29px] text-2xl ">{Parts_of_speech}</h1>
                <img
                  className="w-[656px] h-[2px]"
                  src={rectangleimage2}
                  alt="rectangleimage2"
                />
              </div>
              <div className="w-[721.02px] h-[243px]  font-sans">
                <h1 className="text-2xl text-[#757575] w-[82px] h-[24px] ">Meaning</h1>
                {children}
              </div>
    </div>
  )
}

export default Parts_of_speech