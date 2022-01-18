import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { AudioPlayer } from ".";
  
export function CreatePodEpisodes({pods}){
  
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
            <Link to={`/audioplay/${pod.program.id}/${encodeURIComponent(pod.listenpodfile.url)}/${encodeURIComponent(pod.imageurl)}/${pod.listenpodfile.title}`}>
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

export function CreateBroadcastEpisodes({broadcasts}){
  console.log("we are in createBroadcastEpisodes")
  const [textMoreBroadcasts, setTextMoreBroadcasts] = useState("");

  useEffect(() => {
    if(broadcasts === null) return;
    if(broadcasts.length > 120){
      setTextMoreBroadcasts("There are more then 120 episodes but only 120 showing here!")
      broadcasts = broadcasts.slice(0, 120);
    }
  }, [broadcasts]);
  
  return(
    <>
    <h1 id="maintitle-episodes">Broadcasts for this program from the last month</h1>
    <main id="main">
      <ul className="single-post-wrapper" id="episodes-summaries">
        {console.log("What is the same as the url here?: ", broadcasts)}
        {broadcasts.map((broadcast) => (
          broadcast.broadcast && (
          <li className="single-post-wrapper__post" key={broadcast.id}>
            <Link to={`/audioplay/${broadcast.program.id}/${encodeURIComponent(broadcast.broadcast.broadcastfiles[0].url)}/${encodeURIComponent(broadcast.imageurl)}/${broadcast.title}`}>
            <img src={broadcast.imageurl} alt="Radioprograms image" />
            <div className="single-post-wrapper__content">
              <span>{broadcast.program.name}</span>
              <h3>{broadcast.title}</h3>
              <p>{broadcast.description}</p>
              {/* <AudioPlayer url={broadcast.broadcast.broadcastfiles[0].url} /> */}
            </div>
            </Link>
          </li>
        )))}
      </ul>
      <p id="more-episodes">{textMoreBroadcasts}</p>
    </main>
  </>
  )
}