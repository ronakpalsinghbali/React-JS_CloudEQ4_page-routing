import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import State from './state'
// import Effect from './useeffect'
// import Hookss from "./hooks"
// import Effect2 from './use_effect2'
// import Proj1 from './proj1'
import Route from './main-page'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Route />
    {/* <Proj1 /> */}
    {/* <Effect2/> */}
    {/* <App /> */}
    {/* <State/> */}
    {/* <Hookss/> */}
    {/* <Effect/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
