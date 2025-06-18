import { useState } from "react";
import Head from "./Components/Head";
import Switch from "./Components/Switch";
import Search_Field from "./Components/Search_Field";

function App() {
  return (
    <>
      <div className="p-4 ">
        <Head />
        <Search_Field />
      </div>
    </>
  );
}

export default App;
