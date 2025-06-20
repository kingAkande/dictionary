import React from "react";
import Result_v1 from "./Result_v1";
import Result_v2 from "./Result_v2";

const Word_Result = ({word}) => {
  return (
    <div className="w-[737px] h-[829px] border  mt-8">
        <Result_v1 word ={word}/>
        <Result_v2/>

    </div>
  );
};

export default Word_Result;
