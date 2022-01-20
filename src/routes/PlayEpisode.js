import { useParams, Link } from "react-router-dom";
import { AudioPlayer } from "../components";

export const PlayEpisode = () => {
  const {id, url, imageurl, title, ageParam} = useParams();

  return (
    <div id="body-episodes" >
      <div id="single-episode-wrapper" style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 40}}>
        <div className="single-post-wrapper__post">
          <img src={imageurl} alt="Radioprograms image" />
          <div className="single-post-wrapper__content">
              <h3>{title}</h3>
              <AudioPlayer url={url}/>            
          </div>
        </div>
      </div>
      <nav className="nav-episode" style={{display: "flex", justifyContent: "center"}} >
        <Link to={`/episodes/${id}/${ageParam}`}>Tillbaka</Link>
      </nav>
    </div>
  );
}