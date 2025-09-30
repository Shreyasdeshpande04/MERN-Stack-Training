import { useEffect, useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `Count is ${count}`; 
    console.log(`The value of count is ${count}`);
  }, [count]);

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={increment}>count+</button>
    </>
  );
};



