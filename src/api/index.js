const defaultApiUrlProgrameCategory = "http://api.sr.se/api/v2/programs/index?programcategoryid=";
const defaultApiUrlEpisodes = "http://api.sr.se/api/v2/episodes/index?programid="; 

export async function fetchChildrenPrograms(id) {
  return fetch(`${defaultApiUrlProgrameCategory}${id}&pagination=false&format=json`)
    .then((response) => response.json())
    .then((data) => data.programs)
    .catch((err) => console.error(err))
}

export async function fetchChildrenEpisodes(id) {
  return fetch(`${defaultApiUrlEpisodes}${id}&audioquality=hi&pagination=false&format=json`)
    .then((response) => response.json())
    .then((data) => data.episodes)
    .catch((err) => console.error(err))
}