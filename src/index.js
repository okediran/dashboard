import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Register from "./app/register";
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={ <Register/>} />
          <Route path="/app" element={ <App />} />
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
