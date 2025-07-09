import { useEffect, useState } from "react";
// import {useNavigate , useLocation} from 'react-router-dom'
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import Head from "./Components/Head";
import Switch from "./Components/Switch";
import Search_Field from "./Components/Search_Field";
import Word_Result from "./Components/Word_Result";

function App() {
  
  const navigate = useNavigate();
  const location = useLocation();

   const [word, setWord] = useState(location.state?.word || "");
   const [apiResponse, setapiResponse] = useState(location.state?.apiResponse || null);

     const handleSourceClick = (url) => {
    navigate('/source', { 
      state: { 
        word, 
        apiResponse,
        sourceUrl: url 
      }
    });
  };
  // const [word, setWord] = useState("");
  // const [apiResponse, setapiResponse] = useState(null);

  useEffect(
    function () {
      if (!word) return;
      const controller = new AbortController();
      async function getDefinitions() {
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
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err);
          }
        }
      }

      getDefinitions();
      return () => {
        controller.abort();
        // console.log('Aborting previous fetch');
      };
    },
    [word]
  );

  // console.log(apiResponse)

  // if (apiResponse.length > 0) {
  //   const [firstEntry] = apiResponse;
  //   const { word:wordAPI, phonetic, phonetics, meanings, sourceUrls, license } = firstEntry;

  // //   console.log("Word:", wordAPI);
  // // console.log("Phonetic:", phonetic);
  // }
  const firstEntry = apiResponse?.[0] || {};
  const {
    word: apiWord = "",
    phonetic = "",
    phonetics = [],
    meanings = [],
    sourceUrls = [],
    license = "",
  } = firstEntry;


    const sourceLink = sourceUrls;
    console.log(sourceLink)
  // const wordMeaning = meanings
  // const nounpart = wordMeaning.find(x => x.partOfSpeech === "noun");
  // const {partOfSpeech , definitions} = nounpart
  // console.log(definitions)

  const wordMeaning = meanings;
  const nounpart = wordMeaning.find((x) => x.partOfSpeech === "noun") || {};
  const { partOfSpeech = "", definitions = [], synonyms = [] } = nounpart;

  const def1 = definitions[0];
  const def2 = definitions[1];
  const def3 = definitions[2];

  const defs = [def1?.definition, def2?.definition, def3?.definition];

 

  const verbmeaning = wordMeaning.find(x => x.partOfSpeech === "verb")||{};
  const { definitions:verbDefinitions = []} = verbmeaning;
  // console.log("verbosssss", verbDefinitions )

  // const vm1 = verbDefinitions[0]
  // console.log( "this is vm1",vm1?.definition)


  return (
    <>
      <div className="p-4 ">
        <Head />

        <Search_Field searchWord={word} setword={setWord} />

        <Word_Result
          synonymsApi={synonyms}
          nounMeaning={definitions}
          wordApi={apiWord}
          phoneticText={phonetic}
          verbMeaning = {verbDefinitions}
          sourceLink = {sourceLink}
          sourceLinkHandler ={handleSourceClick}
        />

        {/* {defs.map((x,i)=> <ul key ={i}>{x}</ul>)} */}

        {definitions.map((x) => <ul>{x?.definition}</ul>).slice(0, 3)}

        {verbDefinitions.map((x)=> <ul>{x?.definition}</ul>).slice(0,3)}

        {sourceLink}

        {/* {syn} */}

        {/* {def1?.definition}
        {def2?.definition}
        {def3?.definition} */}
        {/* {definitions.map((x, i)=> <ul key={i}>{x}</ul>)} */}
      </div>
    </>
  );
}

export default App;
