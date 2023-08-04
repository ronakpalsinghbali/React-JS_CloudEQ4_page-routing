import React from "react";
import { useState } from "react";


function UsingHookss(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count -1);
    }
    return(
        <div>
           <h1>hello</h1>
            Counter: {count}<br></br>
            <button onClick={increment}>Increment</button>
            
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default UsingHookss