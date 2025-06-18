import React from "react";
import book from "../assets/Shape.png";
import moon from "../assets/iconoir_half-moon.png";
import Switch from "./Switch";
import rectangle from "../assets/Rectangle.png"

const Head = () => {
  return (
    <div className="w-[736.99px] h-[36.5px] flex justify-between items-center ">
      <div>
        <img className="h-[36px]" src={book} alt="book logo" />
      </div>
      <div className=" flex gap-3">
        {/* <select className="appearance-none  bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K')] bg-no-repeat bg-right bg-[length:12px] border border-green-300 rounded  pr-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" name="" id="">
          <option className="" value="">Sans Serif</option>
          <option value="">Serif</option>
          <option className="" value="">Mono</option>
        </select> */}
        <div class="relative ">
          <select class="appearance-none  pr-8 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Sans Serif</option>
            <option>Serif</option>
            <option>Mono</option>
          </select>
          {/* <!-- Custom arrow using CSS --> */}
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              class="w-4 h-4 text-[#A445ED]"
              fill="none"
              stroke="#A445ED"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
        <img src={rectangle} alt="rectanglar shape" />
        <div className="flex gap-3 items-center">
          <Switch containercolor="bg-[#A445ED]" />

          <img src={moon} alt="moon logo" />
        </div>
      </div>
    </div>
  );
};

export default Head;
