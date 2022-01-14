import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import { fetchChildrenEpisodes } from "../api/"

import './episodes.scss';

export const Episodes = (props) => {

  const[ episod, setEpisode] = useState(null);
  //fetch the episodes / needing the program.id 

  useEffect(() => {
    fetchChildrenEpisodes(props.id).then((res)  => setEpisode(res))
  }, [])



  return (
<div id="body-episodes">
<nav>
<Link to="/">Start</Link> |
 </nav>
<h1 id="maintitle-episodes">Episodes</h1>
<main id="main">
  <ul className="single-post-wrapper" id="episodes-summaries">
  </ul>
  <p id="more-episodes"></p>
</main> 
</div>
  );
}

