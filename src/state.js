// // import React, { Component } from 'react';

// // class Car extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             brand: "Ford",
// //             model: "Mustang",
// //             color: "red",
// //             year: 1964
// //         };
// //     }
// //     render() {
// //         return (
// //             <div>
// //                 <h1>My car company is {this.state.brand}</h1>
// //                 <h2>The model is {this.state.model}</h2>
// //                 <h3>The color is {this.state.color}</h3>
// //                 <h4>This car is from {this.state.year}</h4>
// //             </div>
// //         );
// //     }
// // }

// export default Car;

import './state.css';

import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    handleIncrement = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    handleDecrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    };

    resttoZero = () => {
        this.setState((prevState) => ({count : prevState.count = 0}));
    };


    render() {
        return (
            <div className='main'>
                <h2 className='heading'> <span>Counter: {this.state.count}</span></h2>
                <div className='button-div'>
                    <button onClick={this.handleIncrement} className='button1'>Increment</button>
                    <button onClick={this.handleDecrement} className='button1'>Decrement</button>
                    <button onClick={this.resttoZero} className='button1'>Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter;
