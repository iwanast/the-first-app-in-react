import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
  
export function CreatePodEpisodes({pods, ageParam}){

  const [textMoreEpisodes, setTextMoreEpisodes] = useState("");
  var [podsSlice, setPodsSlice] = useState([]);
  useEffect(() => {
    console.log("här i useEffect podepisodes")
    if(pods === null) return; 
    if(pods.length > 120){
      setTextMoreEpisodes("Det finns mer än 120 episoder men bara 120 visas här!")
    }
    pods.reverse();
    setPodsSlice(pods.slice(0, 120));
  }, [pods]);
  
  return ( 
    <>
    <h1 id="maintitle-episodes">Pods från detta program</h1>
    <main id="main">
      <ul className="single-post-wrapper" id="episodes-summaries">
        {podsSlice && (
          podsSlice.map((pod) => (
          pod.listenpodfile && (
          <li className="single-post-wrapper__post" key={pod.id}>
            <Link to={`/audioplay/${pod.program.id}/${encodeURIComponent(pod.listenpodfile.url)}/${encodeURIComponent(pod.imageurl)}/${pod.listenpodfile.title}/${ageParam}`}>
          <img src={pod.imageurl} alt="Radioprograms logo" />
          <div className="single-post-wrapper__content">
            <span>{pod.listenpodfile.program.name}</span>
            <h3>{pod.listenpodfile.title}</h3>
            <p>{pod.description}</p>
            {/* <AudioPlayer url={pod.listenpodfile.url} /> */}
          </div>
          </Link>
        </li> 
        ))))}
        </ul>
        <p id="more-episodes">{textMoreEpisodes}</p>
      </main>
    </>
  )
}