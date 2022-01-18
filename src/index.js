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
      <Route path="/" element={<App /> } />
      <Route path="/:id" element={<Episodes /> } />
      <Route path="/audioplay/:id/:url/:imageurl/:title" element={<PlayEpisode /> } />
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
