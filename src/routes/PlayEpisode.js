import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AudioPlayer } from "../components";

export const PlayEpisode = () => {
  const {id, url, imageurl, title, ageParam} = useParams();

  return (
    <div id="body-episodes">
      <nav>
        <Link to={`/episodes/${id}/${ageParam}`}>Back</Link> |
      </nav>
      <div className="single-post-wrapper__post">
          <img src={imageurl} alt="Radioprograms image" />
          <div className="single-post-wrapper__content">
              <h3>{title}</h3>
              <AudioPlayer url={url}/>            
          </div>
      </div>
    </div>
   
  );

}

// <div className="single-post-wrapper" id="episodes-summaries">
//  </div>