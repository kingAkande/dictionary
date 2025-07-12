import { useEffect, useState } from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import Head from "./Components/Head";
import Switch from "./Components/Switch";
import Search_Field from "./Components/Search_Field";
import Word_Result from "./Components/Word_Result";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [word, setWord] = useState(location.state?.word || "");
  const [apiResponse, setapiResponse] = useState(
    location.state?.apiResponse || null
  );
  const [isLoading , setisLoading] = useState(false);

  const handleSourceClick = (url) => {
    navigate("/source", {
      state: {
        word,
        apiResponse,
        sourceUrl: url,
      },
    });
  };


  useEffect(
    function () {
      if (!word) return;
      const controller = new AbortController();
      async function getDefinitions() {
        setisLoading(true)
        try {
          const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            // Handle 404 or other HTTP errors
            if (res.status === 404) {
              console.log("Word not found");
              return;
            }
            throw new Error(`HTTP error! status: ${res.status}`);
          }

          const data = await res.json();
          console.log(data);
          setapiResponse(data);
          setisLoading(false)
        
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err);
          }
        } 
      }

      getDefinitions();
      return () => {
        controller.abort();
      };
    },
    [word]
  );

  const firstEntry = apiResponse?.[0] || {};
  const {
    word: apiWord = "",
    phonetic = "",
    phonetics = [],
    meanings = [],
    sourceUrls = [],
  } = firstEntry;



  const wordMeaning = meanings;
  const nounpart = wordMeaning.find((x) => x.partOfSpeech === "noun") || {};
  const { definitions = [], synonyms = [] } = nounpart;


  const verbmeaning = wordMeaning.find((x) => x.partOfSpeech === "verb") || {};
  const { definitions: verbDefinitions = [] } = verbmeaning;


  return (
    <>
      <div className="p-4 ">
        <Head />

        <Search_Field searchWord={word} setword={setWord} />

        <Word_Result
          loading= {isLoading}
          loadcomponent={<Loading/>}
          synonymsApi={synonyms}
          nounMeaning={definitions}
          wordApi={apiWord}
          phoneticText={phonetic}
          verbMeaning={verbDefinitions}
          sourceLink={sourceUrls}
          sourceLinkHandler={handleSourceClick}
          audioLink = {phonetics}
        />

      </div>
    </>
  );
}

export default App;

function Loading(){
  return(
    <div  className=" h-[100px] flex items-center">
      <h1 className="text-3xl bold "> Loading...</h1>
     </div>
  )
}
