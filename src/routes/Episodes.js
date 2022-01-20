import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import { fetchChildrenEpisodes } from "../api/"
import {CreateBroadcastEpisodes, CreatePodEpisodes} from "../components"
import './episodes.scss';

export const Episodes = () => {
  const {id, ageParam} = useParams();
  const [ broadcasts, setBroadcasts ] = useState(null);
  const [ pods, setPods ] = useState(null) 

  useEffect(() => {
    fetchChildrenEpisodes(id).then((result)  => {
      !result[0] ? alert("Det finns inga episoder")
      : result[0].listenpodfile ? setPods(result)
      : result[0].broadcast ? setBroadcasts(result)
      : alert("Det finns inga broadcasts or pods för detta program");
    });
  }, [id])
    
  return (
    <div id="body-episodes">
      <nav>
        <Link to={`/${ageParam}`}>Start</Link> |
      </nav>
        {broadcasts && 
          <CreateBroadcastEpisodes broadcasts={broadcasts} ageParam={ageParam}/>
        }
        {pods && 
          <CreatePodEpisodes pods={pods} ageParam={ageParam}/>
        }
    </div>
  );
}

