import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const a = useRef(0); 
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    a.current = a.current + 1;
    console.log("Ref value:", a.current);
  }, [count]); 

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={increment}>count+</button>
    </>
  );
}

export default App;
