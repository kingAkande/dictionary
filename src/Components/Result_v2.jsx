import React from "react";
import Parts_of_speech from "./Parts_of_speech";
// import rectangle3 from "../assets/Rectangle3.png";
import searchlogo from "../assets/search_logo.png";
// import rectangleimage2 from "../assets/Rectangle2.png";

const Result_v2 = ({
  nounMeaning,
  verbMeaning,
  synonymsApi,
  sourceLink,
  sourceLinkHandler,
  dictionaryFonts,
  onChecked,
}) => {
  const distinctFonts = dictionaryFonts;

  console.log("here is ", distinctFonts);
  return (
    <>
      <div className="w-[327px] md:w-[689px] lg:w-[737px]  ">
        <Parts_of_speech onchecked={onChecked} Parts_of_speech="noun">
          {nounMeaning
            .map((x, i) => (
              <ul className="mt-8 ml-4 space-y-4" key={i}>
                <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
                  {x?.definition}
                </li>
              </ul>
            ))
            .slice(0, 3)}
        </Parts_of_speech>

        <div className="flex gap-12 mt-14 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-[#757575] w-[96px] h-[26px] md:mr-4 lg:mr-4 ">
            Synonyms
          </h1>
          <p
            className={`text-xl md:text-2xl lg:text-2xl text-[#A445ED] font-bold hover:underline cursor-pointer  ${
              distinctFonts === "font-sans"
                ? "font-[Inter]"
                : distinctFonts === "font-serif"
                ? "font-[Lora]"
                : distinctFonts === "font-mono"
                ? "font-[Inconsolata]"
                : ""
            }`}
          >
            {synonymsApi
              .map((x) => x)
              .slice(0, 3)
              .toString("")}
          </p>
        </div>
      </div>
      <Parts_of_speech Parts_of_speech="verb" styl="mt-12">
        {verbMeaning
          .map((x, i) => (
            <ul key={i} className="mt-6 ml-4 space-y-4">
              <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
                {x?.definition}
              </li>
              <p className="ml-5 text-[#757575]">
                {" "}
                {x?.example ? `"${x?.example}"` : ""}
              </p>
            </ul>
          ))
          .slice(0, 3)}

        {/* <ul className="mt-6 ml-4 space-y-4">
          <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tempora perspiciatis illum autem consequatur laudantium unde ducimus
            minus debitis, placeat quod quibusdam nobis iste quia doloremque,
            amet vitae. Accusantium, facilis?
          </li>
        </ul> */}
      </Parts_of_speech>
      {/* <img src={rectangle3} alt="rectangle3" className="mt-8" /> */}
      <div>
        <svg
          className="w-[327px] md:w-[689px] lg:w-[736px] mt-8"
          // width=""
          height="2"
          viewBox="0 0  16"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect  className="w-[327px] md:w-[689px] lg:w-[736px] mt-8" height="0.5" fill={"#979797"} />
        </svg>
      </div>
      <div className=" md:flex lg:flex gap-12 mt-4 ">
        <h1 className=" underline  text-xl text-[#757575] ">Source</h1>
        <div>
          <a
            href={`${sourceLink}`}
            className="flex items-center gap-4 "
            onClick={() => sourceLinkHandler(sourceLink)}
          >
            <p className=" underline  text-[#2D2D2D] ">
              {sourceLink.slice(0, 1)}
            </p>
            <img src={searchlogo} alt="searchlogo" />
          </a>

     
        </div>
      </div>
    </>
  );
};

export default Result_v2;
