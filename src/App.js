// import { Routes, Route } from "react-router-dom";
// import { ProgramPage, EpisodePage } from "./pages"; 
// import Programs from "./routes/programs";
// import Episodes from "./routes/episodes";
import { Link } from "react-router-dom";


function App() {

  const linkaVidare = () => {
    
   
  }

  return (
    <div className="App">
      <h1 className="App-header">Header</h1>
      <Link to="/programs">Programs</Link> |{" "}
      <Link to="/episodes">Episodes</Link>
      <button onClick={linkaVidare}>HELLO</button>
      
    </div>
  );
}

export default App;
