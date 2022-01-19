import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
  
export function CreatePodEpisodes({pods, ageParam}){
  
  console.log("we are in createPodEpisodes")
  const [textMoreEpisodes, setTextMoreEpisodes] = useState("");

  useEffect(() => {
    console.log("här i useEffect podepisodes")
    if(pods === null) return; 
    if(pods.length > 120){
      setTextMoreEpisodes("There are more then 120 episodes but only 120 showing here!")
      pods = pods.slice(0, 120);
    }
    console.log("in useEffect after evtl slicing: ", pods);
    pods = pods.reverse(); 
    console.log("här efter reverse. ", pods)
  }, [pods]);
  
  return ( 
    <>
    <h1 id="maintitle-episodes">Pods for this program</h1>
    <main id="main">
      <ul className="single-post-wrapper" id="episodes-summaries">
        {pods.map((pod) => (
          pod.listenpodfile && (
          <li className="single-post-wrapper__post" key={pod.id}>
            <Link to={`/audioplay/${pod.program.id}/${encodeURIComponent(pod.listenpodfile.url)}/${encodeURIComponent(pod.imageurl)}/${pod.listenpodfile.title}/${ageParam}`}>
          <img src={pod.imageurl} alt="Radioprograms image" />
          <div className="single-post-wrapper__content">
            <span>{pod.listenpodfile.program.name}</span>
            <h3>{pod.listenpodfile.title}</h3>
            <p>{pod.description}</p>
            {/* <AudioPlayer url={pod.listenpodfile.url} /> */}
          </div>
          </Link>
        </li> 
        )))}
        </ul>
        <p id="more-episodes">{textMoreEpisodes}</p>
      </main>
      </>
 )
}