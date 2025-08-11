import { useEffect, useState } from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import Head from "./Components/Head";
import Switch from "./Components/Switch";
import Search_Field from "./Components/Search_Field";
import Word_Result from "./Components/Word_Result";
import emoji from "./assets/emoji.png";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [word, setWord] = useState(location.state?.word || "");
  const [apiResponse, setapiResponse] = useState(
    location.state?.apiResponse || null
  );

  const debouncedQuery = useDebounce(word, 500);

  //   useEffect(() => {
  //   if (debouncedQuery.trim().length >= 2) { // Only search if 2+ characters

  //    const controller = new AbortController();
  //       async function getDefinitions() {
  //         setisLoading(true);
  //         try {
  //           const res = await fetch(
  //             `https://api.dictionaryapi.dev/api/v2/entries/en/${debouncedQuery}`,
  //             { signal: controller.signal }
  //           );

  //           if (!res.ok) {
  //             // Handle 404 or other HTTP errors
  //             if (res.status === 404) {
  //               console.log("Word not found");
  //               return;
  //             }
  //             throw new Error(`HTTP error! status: ${res.status}`);
  //           }

  //           const data = await res.json();
  //           console.log(data);
  //           setapiResponse(data);
  //           setisLoading(false);
  //         } catch (err) {
  //           if (err.name !== "AbortError") {
  //             console.error(err);
  //           }
  //         }
  //       }

  //       getDefinitions();

  //       return () => controller.abort();

  //   }
  // }, [debouncedQuery]);

  const [hasSearched, setHasSearched] = useState(false);
  const [showEmptyError, setShowEmptyError] = useState(false);
  // const [onDisplay, setonDisplay] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (debouncedQuery?.trim().length >= 1) {
      setShowEmptyError(false);
      const controller = new AbortController();

      async function getDefinitions() {
        setisLoading(true);
        try {
          const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${debouncedQuery}`,
            { signal: controller.signal }
          );

          // if (res.ok ) {
          //   setonDisplay((prev)=>!prev);
          //   setMessage("")
          // }

          if (!res.ok) {
            if (res.status === 404) {
              console.log("Word not found");
              setMessage("Word not found");
              setisLoading(false); // Add this
              return;
            }
            throw new Error(`HTTP error! status: ${res.status}`);
            
          }

          // if(!res.ok){
          //   throw new Error(`"na the error b this"  ${res.status}`);
          // }

          const data = await res.json();
          // console.log(data);
          setapiResponse(data);
          setMessage("")
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err);
          }
        } finally {
          setisLoading(false); // This ensures loading stops in all cases
        }
      }

      getDefinitions();

      return () => controller.abort();
    } else {
      // Clear results when query is too short
      setapiResponse(null); // or [] depending on your initial state
      setisLoading(false);
      if (hasSearched && (!word || word?.trim().length === 0)) {
        setShowEmptyError(true);
      }
    }
  }, [debouncedQuery, word, hasSearched]);

  const [checked, setChecked] = useState(() => {
    const keepchecked = localStorage.getItem("checked");
    return keepchecked ? JSON.parse(keepchecked) : false;
  });

  useEffect(() => {
    localStorage.setItem("checked", JSON.stringify(checked));
  }, [checked]);

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

  // useEffect(
  //   function () {
  //     if (!word) return;
  //     const controller = new AbortController();
  //     async function getDefinitions() {
  //       setisLoading(true);
  //       try {
  //         const res = await fetch(
  //           `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  //           { signal: controller.signal }
  //         );

  //         if (!res.ok) {
  //           // Handle 404 or other HTTP errors
  //           if (res.status === 404) {
  //             console.log("Word not found");
  //             return;
  //           }
  //           throw new Error(`HTTP error! status: ${res.status}`);
  //         }

  //         const data = await res.json();
  //         console.log(data);
  //         setapiResponse(data);
  //         setisLoading(false);
  //       } catch (err) {
  //         if (err.name !== "AbortError") {
  //           console.error(err);
  //         }
  //       }
  //     }

  //     getDefinitions();

  //     return () => controller.abort();

  //   },
  //   [word]
  // );

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

  const [fonts, setFonts] = useState(() => {
    const saveFonts = localStorage.getItem("fonts");
    return saveFonts ? JSON.parse(saveFonts) : "font-sans";
  });

  function chooseFont() {
    setFonts(fonts);
  }

  const dictionaryFonts = fonts;

  useEffect(() => {
    localStorage.setItem("fonts", JSON.stringify(fonts));
  }, [fonts]);

  return (
    <>
      <div
        className={`min-h-screen flex  justify-center ${fonts} ${
          checked && "bg-[#050505] text-[#FFFFFF]"
        } `}
      >
        <div className={`mt-8`}>
          <Head
            onChecked={checked}
            onSetChecked={setChecked}
            onChooseFont={chooseFont}
            onfonts={fonts}
            onsetFont={setFonts}
          />

          <Search_Field
            setShowEmptyError={setShowEmptyError}
            showEmptyError={showEmptyError}
            hasSearched={hasSearched}
            setHasSearched={setHasSearched}
            debouncedQuery={debouncedQuery}
            onChecked={checked}
            searchWord={word}
            setword={setWord}
          />

              {apiResponse && message!== "Word not found" && <Word_Result
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
                debouncedQuery={debouncedQuery}
              />}
              {isLoading && <Loading/>}
             {apiResponse &&!isLoading && message === "Word not found" && <ErrorMessage checked={checked} /> }
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

function ErrorMessage({checked}) {
  return (
    <div className="w-[327px] md:w-[689px] lg:w-[737px] flex  flex-col gap-6 items-center  mt-24">
      <img className="mb-4" src={emoji} alt="emoji" />
      <h1 className="font-bold">No definitions found</h1>
      <p className={`${checked && "text-[#757575]"} ${"text-center" }`  }>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try  the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
