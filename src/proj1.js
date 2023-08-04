import React, { useState } from 'react';
import './proj1.css';

const App = () => {
    const [Clicked, setClicked] = useState(false);

    function Click() {
        setClicked(!Clicked);
    };

    let backgroundColor;
    let buttonText;

    if (Clicked) {
        backgroundColor = 'lightblue';
        buttonText = 'Unclick Me';
    }
    else {
        backgroundColor = 'lightgreen';
        buttonText = 'Click Me';
    }
    return (
        <div
            className="background"
            style={{
                backgroundColor: backgroundColor,
            }}
        >
            <h1>Click this button to change the Color!!</h1>
            <button className="button1"
                style={{ backgroundColor: Clicked ? 'lightgreen' : 'lightblue', }}
                onClick={Click}>
                {buttonText}
            </button>
        </div>
    );
};

export default App;
