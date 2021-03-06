import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App';
import { Episodes, PlayEpisode } from "./routes";

const Router = () => {
  return(
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
            <p>Det finns tyvärr inte något att visa här!</p>
          </main>
        } 
      />
    </Routes>
  </BrowserRouter>
  )
}

export default Router; 