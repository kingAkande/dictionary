import React from "react";
import Result_v1 from "./Result_v1";
import Result_v2 from "./Result_v2";

const Word_Result = ({
  wordApi,
  phoneticText,
  nounMeaning,
  verbMeaning,
  synonymsApi,
  sourceLink,
  sourceLinkHandler,
  audioLink,
   loading,
   loadcomponent,
   fonT
}) => {
  return (
    <div className="w-[737px] border  mt-8">
     {loading ? loadcomponent : <Result_v1 audioLink={audioLink} wordApi={wordApi} phoneticText={phoneticText} />}
      <Result_v2
        nounMeaning={nounMeaning}
        verbMeaning={verbMeaning}
        synonymsApi={synonymsApi}
        sourceLink={sourceLink}
        sourceLinkHandler={sourceLinkHandler}
        font={fonT}
      />
    </div>
  );
};

export default Word_Result;
