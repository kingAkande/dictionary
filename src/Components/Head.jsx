import React, { useState } from "react";
import book from "../assets/Shape.png";
import Switch from "./Switch";
import rectangle from "../assets/Rectangle.png";
import { Link } from "react-router-dom";

// const Head = ({
//   onChecked,
//   onSetChecked,
//   onChooseFont,
//   onfonts,
//   onsetFont,
// }) => {
//   const [fontSans, setFontSans] = useState("font-sans");

//   const [fontSerif, setFontSerif] = useState("font-serif");

//   const [fontmono, setFontMono] = useState("font-mono");

//   return (
//     <div className="w-[736.99px] h-[36.5px] flex justify-between items-center ">
//       <div>
//         <img className="h-[36px]" src={book} alt="book logo" />
//       </div>
//       <div className=" flex gap-3 hover:cursor-pointer">
//         <div className="relative">
//           <select
//             value={onfonts}
//             onClick={onChooseFont}
//             onChange={(e) => onsetFont(e.target.value)}
//             className={`appearance-none font-bold pl-2 py-2 pr-6 w-full focus:outline-none focus:ring-0  ${
//               onChecked ? "bg-[#050505]" : ""
//             } hover:cursor-pointer border-none border-0 `}
//             // style={{ border: 'none', outline: 'none' }}
//           >

//             <option
//               value={fontSans}
//               onChange={(e) => setFontSans(e.target.value)}
//               className="font-[Inter] font-bold "

//             >
//               Sans Serif
//             </option>
//             <option
//               value={fontSerif}
//               onChange={(e) => setFontSerif(e.target.value)}
//               className="font-[Lora] font-bold  "
//             >
//               Serif
//             </option>
//             <option
//               value={fontmono}
//               onChange={(e) => setFontMono(e.target.value)}
//               className="font-[Inconsolata] font-bold"

//             >
//               Mono
//             </option>
//           </select>
//           {/* <!-- Custom arrow using CSS --> */}
//           <div className="absolute inset-y-0 right-0 flex items-center  pointer-events-none hover:cursor-pointer">
//             <svg
//               className="w-4 h-4 mb-2 text-[#A445ED]"
//               fill="none"
//               stroke="#A445ED"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               ></path>
//             </svg>
//           </div>
//         </div>
//         <img src={rectangle} alt="rectanglar shape" />
//         <div className="flex gap-3 items-center">
//           <Switch
//             onChecked={onChecked}
//             onSetChecked={onSetChecked}
//             containercolor="bg-[#A445ED] "
//           />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="24px"
//             viewBox="0 -960 960 960"
//             width="24px"
//             fill={` ${!onChecked ? "#979797" : "#A445ED"}`}
//           >
//             <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" />
//           </svg>
//           {/* <img src={moon} alt="moon logo" /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

import { useRef, useEffect } from "react";

const Head = ({ onChecked, onsetFont, onfonts, onSetChecked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fonts = [
    { value: "font-sans", label: "Sans Serif", fontClass: "font-[Inter]" },
    { value: "font-serif", label: "Serif", fontClass: "font-[Lora]" },
    { value: "font-mono", label: "Mono", fontClass: "font-[Inconsolata]" },
  ];

  const selectedFont = fonts.find((font) => font.value === onfonts) || fonts[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (fontValue) => {
    onsetFont(fontValue);
    setIsOpen(false);
  };

  return (
    <div className=" w-[327px] md:w-[689px] lg:w-[737px] h-[36.5px] flex justify-between  items-center mx-auto ">
      <div>
        <img className="h-[36px]" src={book} alt="book logo" />
      </div>
      <div className="flex gap-3 hover:cursor-pointer">
        <div className="relative " ref={dropdownRef}>
          {/* Custom Select Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`appearance-none font-bold pl-2 py-2 pr-6 focus:outline-none focus:ring-0 ${
              onChecked ? "bg-[#050505] text-white" : "bg-white text-black"
            } hover:cursor-pointer border-none ${selectedFont.fontClass}`}
          >
            {selectedFont.label}
          </button>

          {/* Custom Arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
            <svg
              className={`w-4 h-4 mb-2 text-[#A445ED] transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="#A445ED"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Custom Dropdown Options */}
          {isOpen && (
            <div
              className={`absolute pl-2 top-full left-0 mt-1 w-full min-w-[120px] hover: cursor-pointer ${
                onChecked
                  ? "bg-[#1F1F1F] shadow-[#A445ED] rounded-2xl "
                  : "bg-white"
              } shadow-lg z-50`}
            >
              {fonts.map((font) => (
                <button
                  key={font.value}
                  onClick={() => handleSelect(font.value)}
                  className={`w-full px-2 py-2 text-left font-bold   ${
                    font.fontClass
                  } ${
                    onfonts === font.value
                      ? onChecked
                        ? "text-white "
                        : "text-black "
                      : ""
                  } focus:outline-none hover: cursor-pointer hover:text-[#A445ED] `}
                >
                  {font.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <img src={rectangle} alt="rectanglar shape" />
        <div className="flex gap-3 items-center">
          <Switch
            onChecked={onChecked}
            onSetChecked={onSetChecked}
            containercolor="bg-[#A445ED]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={`${!onChecked ? "#979797" : "#A445ED"}`}
          >
            <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Head;
