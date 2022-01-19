import { useState, useEffect } from "react"
import { Button, CreateProgramsPost } from "./components"
import { fetchChildrenPrograms } from "./api/"
import { useParams } from "react-router-dom"

function App() {

  const { ageParam }  = useParams();
  const programCategoryIdAge3 = 2;
  const programCategoryIdAge9 = 132;
  const [ age, setAge ] = useState(3);
  const [ name, setName ] = useState("Visa programmen för ålder 9-13");
  const [ programscategories, setProgramscategories ] = useState([]);
  const [ backgroundColor, setBackgroundColor ] = useState("turquoise-background"); 

  useEffect(() => {
    if(ageParam === "9") {
      setName("Visa programmen för ålder 3-8");
      setAge(9);
      setBackgroundColor("pink-background");
      console.log("ageParam inside useEffect 9", ageParam)
    } else if(ageParam === "3"){
      setName("Visa programmen för ålder 9-13")
      setAge(3);
      setBackgroundColor("turquoise-background");
      console.log("ageParam inside useEffect 3", ageParam)
    }
  }, [ageParam])
  
  
  function toggleAge() {
    if(name === "Visa programmen för ålder 9-13"){
      setName("Visa programmen för ålder 3-8");
      setAge(9);
      setBackgroundColor("pink-background");
  } else{
      setName("Visa programmen för ålder 9-13")
      setAge(3);
      setBackgroundColor("turquoise-background");
    }
  }
    
    useEffect(() => {
      if(age === 9){
        fetchChildrenPrograms(programCategoryIdAge9).then((res) => setProgramscategories(res))
        console.log("programscategories in console.log directly after the fetch", programscategories)
      } else if(age === 3){
        fetchChildrenPrograms(programCategoryIdAge3).then((res)  => setProgramscategories(res))
        console.log("programscategories in console.log directly after the fetch", programscategories)
      } else(
        console.log("error when loading the programs for the different ages")
      )
    }, [age])
    
  return (
    <div id="body-programs">
      <h1>Svensk radio för barn</h1>
      <p className="text-align-center">Tack till Sveriges Radio API för innehållet. Till alla barn: Ha så kul! </p>
      <Button id="change-age-button" className={backgroundColor} label={name} onClick={toggleAge}  />
      <main id="main">
          <CreateProgramsPost programscategories={programscategories} ageParam={age}/>
      </main>
    </div>
  );
}

export default App;
