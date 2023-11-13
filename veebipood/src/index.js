import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// npm install <-- seadistab uue mooduli node_modules kausta
//            seadistab selle mooduli mis on "install" järel kirjutatud
// npm install react-router-dom <-- moodul navigeerimiseks
// React ei anna navigeerimiseks vajalikke faile kaasa
// 1. npm install react-router-dom (projekti kaustas)
// 2. peame võtma "react-router-dom" kaustast tagi (elementi) BrowserRouter
// 3. peame siduma App.js failis URLd ja HTMLi

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode võimaldab kõrvalefekte leida, tehes tagataustal uuesti renderdamise
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


