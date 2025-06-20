import React from "react";
import Parts_of_speech from "./Parts_of_speech";
// import rectangleimage2 from "../assets/Rectangle2.png";

const Result_v2 = () => {
  return (
    <>
    <div className="w-[736px] h-[377px]  ">
      {/* <div className="flex items-center justify-between mb-10">
        <h1 className="w-[57px] h-[29px] text-2xl ">Noun</h1>
        <img
          className="w-[656px] h-[2px]"
          src={rectangleimage2}
          alt="rectangleimage2"
        />
      </div>
      <div className="w-[721.02px] h-[243px]  font-sans">
        <h1 className="text-2xl text-[#757575] w-[82px] h-[24px] ">Meaning</h1>
        <ul className="mt-8 ml-4 space-y-4">
          <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tempora perspiciatis illum autem consequatur laudantium unde ducimus
            minus debitis, placeat quod quibusdam nobis iste quia doloremque,
            amet vitae. Accusantium, facilis?
          </li>
          <li  className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            ea eum ullam sapiente vel iure in laboriosam voluptate neque.
            Accusantium perspiciatis itaque maiores modi commodi ut fuga
            nesciunt obcaecati? Rerum.
          </li>
        </ul>
      </div> */}

      <Parts_of_speech Parts_of_speech="Noun">
        <ul className="mt-8 ml-4 space-y-4">
          <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tempora perspiciatis illum autem consequatur laudantium unde ducimus
            minus debitis, placeat quod quibusdam nobis iste quia doloremque,
            amet vitae. Accusantium, facilis?
          </li>
          <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            ea eum ullam sapiente vel iure in laboriosam voluptate neque.
            Accusantium perspiciatis itaque maiores modi commodi ut fuga
            nesciunt obcaecati? Rerum.
          </li>
        </ul>
      </Parts_of_speech>

      <div className="flex gap-12 mt-8">
        <h1 className="text-2xl text-[#757575] w-[96px] h-[26px] ">Synonyms</h1>
        <p className=" text-2xl text-[#A445ED] font-bold font-[lora]">
          electronic keyboard
        </p>
      </div>
    </div>
    <Parts_of_speech Parts_of_speech="Verb" styl="mt-8" >
        <ul className="mt-8 ml-4 space-y-4">
          <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tempora perspiciatis illum autem consequatur laudantium unde ducimus
            minus debitis, placeat quod quibusdam nobis iste quia doloremque,
            amet vitae. Accusantium, facilis?
          </li>
        
        </ul>
    </Parts_of_speech>
    </>
  );
};

export default Result_v2;
