import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

export function CreateBroadcastEpisodes({broadcasts, ageParam}){
  console.log("we are in createBroadcastEpisodes")
  const [textMoreBroadcasts, setTextMoreBroadcasts] = useState("");

  useEffect(() => {
    console.log("här i useEffect createbroadcastepisodes")
    if(broadcasts === null) return;
    if(broadcasts.length > 120){
      setTextMoreBroadcasts("There are more then 120 episodes but only 120 showing here!")
      broadcasts = broadcasts.slice(0, 120);
      console.log("inside the if-statemenet in useEffect in CreateBroadcastEpisodes")
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
            <Link to={`/audioplay/${broadcast.program.id}/${encodeURIComponent(broadcast.broadcast.broadcastfiles[0].url)}/${encodeURIComponent(broadcast.imageurl)}/${broadcast.title}/${ageParam}`}>
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