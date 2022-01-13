import { Link } from "react-router-dom";
import './episodes.scss';

export const Episodes = (props) => {
  return (
<div id="body-episodes">
<nav>
<Link to="/programs">Start</Link> |
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

