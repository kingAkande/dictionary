import React from "react";
import Parts_of_speech from "./Parts_of_speech";
import rectangle3 from "../assets/Rectangle3.png";
import searchlogo from "../assets/search_logo.png";
// import rectangleimage2 from "../assets/Rectangle2.png";

const Result_v2 = ({
  nounMeaning,
  verbMeaning,
  synonymsApi,
  sourceLink,
  sourceLinkHandler,
}) => {
  return (
    <>
      <div className="w-[736px]  ">
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

        {/* {definitions.map((x)=> <ul>{x.definition}</ul> ).slice(0,3)} */}

        <Parts_of_speech Parts_of_speech="Noun">
          {nounMeaning
            .map((x, i) => (
              <ul className="mt-8 ml-4 space-y-4" key={i}>
                <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
                  {x?.definition}
                </li>
              </ul>
            ))
            .slice(0, 3)}

          {/* <ul className="mt-8 ml-4 space-y-4">
            <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              tempora perspiciatis illum autem consequatur laudantium unde
              ducimus minus debitis, placeat quod quibusdam nobis iste quia
              doloremque, amet vitae. Accusantium, facilis?
            </li>
            <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              ea eum ullam sapiente vel iure in laboriosam voluptate neque.
              Accusantium perspiciatis itaque maiores modi commodi ut fuga
              nesciunt obcaecati? Rerum.
            </li>
          </ul> */}
        </Parts_of_speech>

        <div className="flex gap-12 mt-14 ">
          <h1 className="text-2xl text-[#757575] w-[96px] h-[26px] ">
            Synonyms
          </h1>
          <p className=" text-2xl text-[#A445ED] font-bold font-[lora]">
            {synonymsApi
              .map((x) => x)
              .slice(0, 6)
              .toString("")}
          </p>
        </div>
      </div>
      {/* {verbDefinitions.map((x)=> <ul>{x?.definition}</ul>)} */}
      <Parts_of_speech Parts_of_speech="Verb" styl="mt-12">
        {verbMeaning
          .map((x,i) => (
            <ul key={i} className="mt-6 ml-4 space-y-4">
              <li className="list-none before:content-['•'] before:text-[#8F19E8] before:mr-3 ">
                {x?.definition}
              </li>
              <p className="ml-5"> {x?.example ? `"${x?.example}"` : ""}</p>
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
      <img src={rectangle3} alt="rectangle3" className="mt-8" />
      <div className="flex gap-12 mt-4 font-serif ">
        <h1 className="  text-[#757575] w-[48px] h-[18px] ">Source</h1>
        <div>
          <a
            href={`${sourceLink}`}
            className="flex items-center gap-4 "
            onClick={() => sourceLinkHandler(sourceLink)}
          >
            <p className=" underline  text-[#A445ED] ">
              {sourceLink.slice(0, 1)}
            </p>
            <img src={searchlogo} alt="searchlogo" />
          </a>

          {/* {sourceLink &&
            sourceLink.map((url, i) => (
              <a
                href={`${sourceLink}`}
                key={i}
                className="flex items-center gap-4 "
                onClick={() => sourceLinkHandler(url)}
              >
                <p className=" underline  text-[#A445ED] ">{sourceLink.slice(0,1)}</p>
                <img src={searchlogo} alt="searchlogo" />
              </a>
            ))} */}
        </div>
      </div>
    </>
  );
};

export default Result_v2;
