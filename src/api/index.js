const defaultApiUrlProgrameCategory = "http://api.sr.se/api/v2/programs/index?programcategoryid=";

export async function fetchChildrenPrograms(id) {
  return fetch(`${defaultApiUrlProgrameCategory}${id}&pagination=false&format=json`)
    .then((response) => response.json())
    .then((data) => data.programs)
    .catch((err) => console.error(err))
}