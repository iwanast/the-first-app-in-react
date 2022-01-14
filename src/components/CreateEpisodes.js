import { useEffect, useState} from "react";

    // for(let i = result.episodes.length - 1; i >= 0; i--){
    //   if(result.episodes[i].listenpodfile){
    //     createPodEpisodes(result.episodes[i]);
    //   } 
  
export function CreatePodEpisodes({pods}){
  
console.log("we are in createPodEpisodes")
  const [textMoreEpisodes, setTextMoreEpisodes] = useState("");

  useEffect(() => {
    if(pods === null) return; 
    if(pods.length > 120){
      setTextMoreEpisodes("There are more then 120 episodes but only 120 showing here!")
      pods = pods.slice(0, 121);
    }

    pods.reverse(); 
    console.log(pods)
  }, []);
  


  
  return ( 
    <>
    <h1 id="maintitle-episodes">Pods for this program</h1>
    <main id="main">
      <ul className="single-post-wrapper" id="episodes-summaries">
        
        {pods.map((pod) => (
          <li className="single-post-wrapper__post" key={pod.id}>
          <audio id={`myAudio${pod.id}`}>
            {console.log("hier in map pod.listenpodfile.url ist: ", pod.listenpodfile.url)}
            <source src={pod.listenpodfile.url} type={`audio/${declareAudioTypeFromFileEnding(pod.listenpodfile.url)}`} />
            Your browser does not support the audio element.
          </audio>
          <img src={pod.imageurl} alt="Radioprograms image" />
          <div className="single-post-wrapper__content">
            <span>{pod.listenpodfile.program.name}</span>
            <h3>{pod.listenpodfile.title}</h3>
            <p>{pod.description}</p>
            <button className="listen-button" type="button" data-id={pod.id} data-actionsound="play" >Play</button> 
            <button className="listen-button" type="button" data-id={pod.id} data-actionsound="pause">Pause</button>
          </div>
        </li> 
        ))}

        </ul>
        <p id="more-episodes">{textMoreEpisodes}</p>
      </main>
      </>
 )
}

export function CreateBroadcastEpisodes(broadcasts){
  
  console.log("we are in createBroadcastEpisodes")
  const [textMoreBroadcasts, setTextMoreBroadcasts] = useState("");

  useEffect(() => {
    if(broadcasts === null) return;
    if(broadcasts.length > 120){
      setTextMoreBroadcasts("There are more then 120 episodes but only 120 showing here!")
      broadcasts = broadcasts.slice(0, 121);
    }
  }, []);
  

   
  return(
    <>
    <h1 id="maintitle-episodes">Broadcasts for this program from the last month</h1>
    <main id="main">
      <ul className="single-post-wrapper" id="episodes-summaries">
        
        {broadcasts.map((broadcast) => (
          <li className="single-post-wrapper__post">
  <audio id={`myAudio${broadcast.id}`}>
    <source src={broadcast.broadcast.broadcastfiles[0].url} type={`audio/${declareAudioTypeFromFileEnding(broadcast.broadcast.broadcastfiles[0].url)}`} />
    Your browser does not support the audio element.
  </audio>
  <img src={broadcast.imageurl} alt="Radioprograms image" />
  <div className="single-post-wrapper__content">
   <span>{broadcast.program.name}</span>
   <h3>{broadcast.title}</h3>
   <p>{broadcast.description}</p>
   <button className="listen-button" type="button" data-id={broadcast.id} data-actionsound="play" >Play</button> 
    <button className="listen-button" type="button" data-id={broadcast.id} data-actionsound="pause">Pause</button>
  </div>
 </li>
        ))}

 </ul>
 <p id="more-episodes">{textMoreBroadcasts}</p>
</main>
</>
  )
}


function declareAudioTypeFromFileEnding(props){
  let audioFileType = props.substr(props.length - 3);
  switch(audioFileType){
    case "mp3":
      audioFileType = "mpeg";
      break;
    case "oga": 
      audioFileType = "ogg";
      break;
    case "m4a":
      audioFileType = "mp4";
      break;
    default:  
  }    
  return audioFileType;
}