import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/home/home";
import ScriptTag from 'react-script-tag'

import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from "./components/intro/intro";
import Pricings from "./components/pricings/pricings";
import Footer from "./components/footer/footer";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Intro />
    <Pricings />
    <Footer />
    {/*<ScriptTag type={'text/javascript'} src={'./assets/js/main.js'} />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
