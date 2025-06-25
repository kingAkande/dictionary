import { useEffect, useState } from "react";
import Head from "./Components/Head";
import Switch from "./Components/Switch";
import Search_Field from "./Components/Search_Field";
import Word_Result from "./Components/Word_Result";

function App() {
  const [word, setWord] = useState("");
  const [definitions ,setDefinition]=useState({});

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
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err);
          }
        }
      }

      getDefinitions();
      return () => controller.abort();
    },
    [word]
  );

  
  
  return (
    
    <>
      <div className="p-4 ">
        <Head />
        <Search_Field word={word} setWord={setWord} />
        <Word_Result word={word} />
      </div>
    </>
  );
}

export default App;
