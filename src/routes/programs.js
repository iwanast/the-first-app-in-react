//import { Link } from "react-router-dom";
//import '../App.scss';
import { useState, useEffect } from "react"
import { Button, EachProgram } from "../components"
import { fetchChildrenPrograms } from "../api/"

export const Programs = (props) => {
const urlAge3 = 2;
const urlAge9 = 132;
const [age, setAge] = useState(3);
const [name, setName] = useState("Display the programes for age 9-13");
const [programscategories, setProgramscategories] = useState([]);
const [backgroundColor, setBackgroundColor] = useState("turquoise-background"); 

function toggleAge() {
  if(name === "Display the programes for age 9-13"){
    setName("Display the programes for age 3-8");
    setAge(9);
    setBackgroundColor("pink-background");
} else{
    setName("Display the programes for age 9-13")
    setAge(3);
    setBackgroundColor("turquoise-background");
  }
}


  
  useEffect(() => {
    
    if(age === 9){
      fetchChildrenPrograms(132).then((res) => setProgramscategories(res))
      console.log("programscategories in console.log directly after the fetch", programscategories)
    } else if(age === 3){
      fetchChildrenPrograms(2).then((res)  => setProgramscategories(res))
      console.log("programscategories in console.log directly after the fetch", programscategories)
    } else(
      console.log("error when loading the programs for the different ages")
    )
  }, [age])

  return (
    <div id="body-programs">
      <h1>Swedish radio for children</h1>
      <Button id="change-age-button" className={backgroundColor} label={name} onClick={toggleAge}  />
      <main id="main">
        <ul className="post-wrapper" id="posts-summaries">
          <EachProgram programscategories={programscategories} />
        </ul>
      </main>
    </div>
  );
}