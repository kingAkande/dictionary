import { useState } from "react";
import Head from "./Components/Head";
import Switch from "./Components/Switch";
import Search_Field from "./Components/Search_Field";
import Word_Result from "./Components/Word_Result";

function App() {

   const [word , setWord]=useState("Keyboard")

  return (
    <>
      <div className="p-4 ">
        <Head />
        <Search_Field  word ={word} setWord={setWord} />
        <Word_Result word = {word} />
      </div>
    </>
  );
}

export default App;
