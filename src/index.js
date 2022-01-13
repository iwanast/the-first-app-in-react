import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
import App from './App';
import { Programs, Episodes} from "./routes";


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App /> } />
        <Route path="/programs" element={<Programs /> } />
        <Route path="/episodes" element={<Episodes /> } />
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
