import React, { useState, useEffect } from 'react';

const DynamicTitleComponent = () => {
  const [num, setCount] = useState(0);
 
  useEffect(() => {
    document.title = `Clicked ${num} times`;
  }, [num]);

  function Increment() {
        setCount((previousCount) => previousCount + 1);
    }
    function Decrement() {
        setCount((previousCount) => previousCount - 1);
    }
    function Reset() {
        setCount((previousCount) => previousCount = 0);
    }


  return (
    <div>
      <h1>Look at the Title, it's changing!!!</h1>
      <p>Count: {num}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default DynamicTitleComponent;
