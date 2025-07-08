import { useEffect, useState } from "react";
import Head from "./Components/Head";
import Switch from "./Components/Switch";
import Search_Field from "./Components/Search_Field";
import Word_Result from "./Components/Word_Result";

function App() {
  const [word, setWord] = useState("");
  const [apiResponse ,setapiResponse]=useState(null);

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
          setapiResponse(data)
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err);
          }
        }
      }

      getDefinitions();
      return () => {controller.abort()
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
    word: apiWord = '', 
    phonetic = '', 
    phonetics = [], 
    meanings = [], 
    sourceUrls = [], 
    license = '' 
  } = firstEntry;



console.log("this is me:" ,phonetic);


// const wordMeaning = meanings
// const nounpart = wordMeaning.find(x => x.partOfSpeech === "noun");
// const {partOfSpeech , definitions} = nounpart
// console.log(definitions)
return (
  
  <>
      <div className="p-4 ">

        <Head/>

        <Search_Field searchWord={word} setword={setWord} />

        <Word_Result wordApi={apiWord} phoneticText={phonetic} />

      </div>
    </>
  );
}

export default App;
