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

  // const [checked, setChecked] = useState(location.state?.checked || false);

  const [checked, setChecked] = useState(()=>{
    const keepchecked = localStorage.getItem("checked");
    return keepchecked ? JSON.parse(keepchecked) : false
  });

  useEffect(()=>{
    localStorage.setItem("checked", JSON.stringify(checked))
  },[checked])


  const [isLoading, setisLoading] = useState(false);

  const handleSourceClick = (url) => {
    navigate("/source", {
      state: {
        word,
        apiResponse,
        // checked,
        sourceUrl: url,
      },
    });
  };

  useEffect(
    function () {
      if (!word) return;
      const controller = new AbortController();
      async function getDefinitions() {
        setisLoading(true);
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
          setisLoading(false);
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

  const [fonts, setFonts] = useState(()=>{
    const saveFonts = localStorage.getItem("fonts");
    return saveFonts ? JSON.parse(saveFonts) : "font-sans"
  });

  function chooseFont() {
    setFonts(fonts);
  }

  const dictionaryFonts = fonts;

useEffect(()=>{
  localStorage.setItem("fonts" , JSON.stringify(fonts))
},[fonts])
  return (
    <>
      <div className={` flex justify-center ${fonts} ${checked && "bg-[#050505] text-[#FFFFFF]" }`}>
        <div className={`mt-8`}>

        <Head
          onChecked={checked}
          onSetChecked={setChecked}
          onChooseFont={chooseFont}
          onfonts={fonts}
          onsetFont={setFonts}
        />

        <Search_Field  onChecked={checked} searchWord={word} setword={setWord} />

        <Word_Result
          loading={isLoading}
          loadcomponent={<Loading />}
          synonymsApi={synonyms}
          nounMeaning={definitions}
          wordApi={apiWord}
          phoneticText={phonetic}
          verbMeaning={verbDefinitions}
          sourceLink={sourceUrls}
          sourceLinkHandler={handleSourceClick}
          audioLink={phonetics}
          dictionaryFonts={dictionaryFonts}
           onChecked={checked}
        />
        </div>
      </div>
    </>
  );
}

export default App;

function Loading() {
  return (
    <div className=" h-[100px] flex items-center">
      <h1 className="text-3xl bold "> Loading...</h1>
    </div>
  );
}
