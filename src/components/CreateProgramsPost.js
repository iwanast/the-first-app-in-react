import { Link } from "react-router-dom"

export function CreateProgramsPost( {programscategories} ) {
  return ( 
    <ul className="post-wrapper" id="posts-summaries">
    {programscategories.map((program) => (
      program.hasondemand || program.haspod ?
      <li className="post-wrapper__post" key={program.id}>
        <Link to={`/${program.id}`}>
        <img src={program.programimage} alt="Radioprograms specific logo" />
        <div className="post-wrapper__content">
          <span>{program.programcategory.name}</span>
          <h3>{program.name}</h3>
          <p> {program.description} </p>
        </div>
        </Link>
    </li> : null 
    )
    )
}
</ul>);
}
  