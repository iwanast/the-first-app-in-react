import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AudioPlayer } from "../components";

export const PlayEpisode = () => {
  const {id} = useParams();
  console.log(id);
  const {url} = useParams();
  console.log(url);
  const {imageurl} = useParams();
  console.log(imageurl);
  const {title} = useParams();
  // console.log(title)

  const defaultApiUrlEpisodes = "http://api.sr.se/api/v2/episodes/index?programid="; 

  return (
    <div id="body-episodes">
      <nav>
        <Link to={`/${id}`}>Back</Link> |
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