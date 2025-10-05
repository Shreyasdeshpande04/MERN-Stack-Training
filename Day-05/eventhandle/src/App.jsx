import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const handleButtonClick = () => {
    alert("Hey, I am a JS Event!");
  };

  const handleButtonClick1 = (event) => {
    alert("Hey, I am a React Event!");
    console.log(event); 
  };

  return (
    <>
      <button onClick={handleButtonClick}>Click Me</button>
      <button onClick={handleButtonClick1}>Click Me 1</button>
    </>
  );
}

export default App;
