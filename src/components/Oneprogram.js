export function EachProgram( {programscategories} ) {
  console.log("jag är i EachProgram", programscategories)
  return ( 
    programscategories.map((program) => {
     if(program.hasondemand || program.haspod) {
      <li className="post-wrapper__post" key={program.id}>
    {/* <Link to={`/channel/${channel.id}`}>{channel.name}</Link>
        <a href="./pages/episodes.html?id=${programData.id}"> */}
        <img src={program.programimage} alt="Radioprograms specific logo" />
        <div className="post-wrapper__content">
          <span>{program.programcategory.name}</span>
          <h3>{program.name}</h3>
          <p> {program.description} </p>
        </div>
    {/* </a> dann auch hier?: </Link> */}
    </li>
    }}
      
));
}