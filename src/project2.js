import React, {useState} from "react";
const ColorChanger = () => {
    const [backgroundColor, setbackgroundColor] = useState('black');
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setbackgroundColor(backgroundColor === 'black' ? 'red' : 'black');
    }
    const handleHover = () => {
        setCount(count +1);
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div style={{ backgroundColor }}>
            <p style={{color: "white"}}>Click to change color</p>
            <button onMouseEnter={handleHover}>Hover count: {count}</button>
            <button onClick={handleClick}>Change Color</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default ColorChanger;