export function ProgramPage(props){
  return (
  <div id="body-programs">
  <h1>Swedish radio for children</h1>
  <button id="change-age-button" data-lowestAge="3">Display the programes for age 9-13</button>
  <main id="main">
    <ul class="post-wrapper" id="posts-summaries">
    </ul>
  </main>

  </div>
  );
}