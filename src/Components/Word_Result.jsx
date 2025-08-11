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
  dictionaryFonts,
  onChecked,
  debouncedQuery,
  emptyFieldError,
}) => {
  return (
    <div className="w-[327px] md:w-[689px] lg:w-[737px]   mt-8">
      {loading ? (
        loadcomponent
      ) : (
        <Result_v1
          emptyFieldError={emptyFieldError}
          debouncedQuery={debouncedQuery}
          onChecked={onChecked}
          audioLink={audioLink}
          wordApi={wordApi}
          phoneticText={phoneticText}
        />
      )}
      <Result_v2
        nounMeaning={nounMeaning}
        verbMeaning={verbMeaning}
        synonymsApi={synonymsApi}
        sourceLink={sourceLink}
        sourceLinkHandler={sourceLinkHandler}
        dictionaryFonts={dictionaryFonts}
        onChecked={onChecked}
      />
    </div>
  );
};

export default Word_Result;
