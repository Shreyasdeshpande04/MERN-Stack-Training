import {use} from "react"
import {useState} from "react"

export const Student=()=>{
    let[count,setCount]=useState(0)
    const Increment=()=>{
        setCount(count+1)
    }
       const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
return(
    <>
    <h1>{count}</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </>
)

}

