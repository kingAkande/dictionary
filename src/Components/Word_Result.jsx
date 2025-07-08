import React from "react";
import Result_v1 from "./Result_v1";
import Result_v2 from "./Result_v2";

const Word_Result = ({wordApi ,phoneticText}) => {
  return (
    <div className="w-[737px]   mt-8">
        <Result_v1 wordApi ={wordApi} phoneticText={phoneticText} />
        <Result_v2/>

    </div>
  );
};

export default Word_Result;
