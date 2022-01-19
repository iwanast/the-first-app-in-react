import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
import App from './App';
import { Episodes, PlayEpisode } from "./routes";


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App /> } >
        <Route path=":ageParam" element={<App /> } />
        <Route path="" element={<App /> } />
      </Route>
      <Route path="/episodes/:id/:ageParam" element={<Episodes /> } />
      <Route path="/audioplay/:id/:url/:imageurl/:title/:ageParam" element={<PlayEpisode /> } />
      <Route 
        path="*" 
        element={
          <main>
            <p>There's nothing here!</p>
          </main>
        } 
      />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
