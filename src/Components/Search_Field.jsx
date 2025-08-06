import React, { useState } from "react";
import search_button from "../assets/searchButtton.png";

const Search_Field = ({
  showEmptyError,
  setShowEmptyError,
  setHasSearched,
  hasSearched,
  onChecked,
  word,
  setword,
}) => {
  function handlesubmit(e) {
    e.preventDefault();
    if (word == "") return;

    setword(e.target.value?.trim());

    if (e.target.value?.trim().length > 0 && !hasSearched) {
      setHasSearched(true);
    }
    setShowEmptyError(false);
  }

  return (
    <>
      <div
        className={`flex flex-col justify-center  w-[736px] h-[64px] mt-10 rounded-2xl  hover:border-2 border-[#A445ED] hover: cursor-pointer ${
          onChecked ? "bg-[#1f1f1f]" : "bg-[#F4F4F4]"
        } ${showEmptyError && "border-[#FF5252]"}`}
      >
        <form
          className=" mx-[16px] flex justify-between items-center"
          onSubmit={handlesubmit}
          action=""
        >
          <input
            placeholder="Search for any word..."
            type="text"
            className={`${
              onChecked && "text-[#ffffff]"
            } w-[211px] font-bold font-[inconsolata] focus:outline-none `}
            value={word}
            onChange={handlesubmit}
          />
          <img
            className={`w-[15.55px] h-[15.55px] `}
            src={search_button}
            alt=""
          />
        </form>
      </div>
      {showEmptyError && (
        <p className="mt-2 text-[#FF5252]">Whoops, can't be empty...</p>
      )}
    </>
  );
};

export default Search_Field;
