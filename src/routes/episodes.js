import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";

import { fetchChildrenEpisodes } from "../api/"
import {CreateBroadcastEpisodes, CreatePodEpisodes} from "../components"

import './episodes.scss';

export const Episodes = () => {
  const {id} = useParams();
  const [ broadcasts, setBroadcasts] = useState(null);
  const [pods, setPods] = useState(null) 

  useEffect(() => {
    fetchChildrenEpisodes(id).then((result)  => {
      console.log("Här är result from fetchChildrenEpisodes: ", result)
      if(!result[0]) {
        alert("There are no episodes")
      }else if(result[0].listenpodfile) {
        setPods(result)
      }else if(result[0].broadcast) {
        setBroadcasts(result)
      }else {
        alert("There are no broadcasts or pods for this program")
      }
    });
  }, [id])
    
  return (
    <div id="body-episodes">
      <nav>
        <Link to="/">Start</Link> |
      </nav>
        {broadcasts && 
          <CreateBroadcastEpisodes broadcasts={broadcasts} />
        }
        {pods && 
          <CreatePodEpisodes pods={pods} />
        }
       
    </div>
  );
}

