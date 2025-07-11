import React, { useState } from 'react'
import search_button from '../assets/searchButtton.png'

const Search_Field = ({word, setword}) => {


    function handlesubmit(e){
        e.preventDefault();
        if(word == "") return
        // console.log(setWord)
        setword("")
        console.log("come")
    }

  return (
    <div className= ' flex flex-col justify-center  w-[736px] h-[64px] mt-10 rounded-2xl bg-[#CDCDCD] ' >
        <form className=' mx-[16px] flex justify-between items-center' onSubmit={handlesubmit} action="">
            <input type="text" className=' font-bold font-[inconsolata]   'value={word} onChange={(e)=>setword(e.target.value)} />
            <img className='w-[15.55px] h-[15.55px]' src={search_button}  alt="" />
        </form>
    </div>
  )
}

export default Search_Field
