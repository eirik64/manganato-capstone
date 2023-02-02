import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// Pages
// import Chapter from "./Chapter";
// import Bookdesc from "./Bookdesc";
import Trending from "./Trending";

export default function Appp() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route index element={<App />} />
            <Route path="App" element={<App />} />
            {/*<Route path="/manganato_redesign/chapter" element={<Chapter />} />*/}
            {/*<Route path="/manganato_redesign/Bookdesc" element={<Bookdesc/>} />*/}
            <Route path="Trending" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appp />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
