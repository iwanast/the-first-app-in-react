import ReactPlayer from "react-player/lazy";

export const AudioPlayer = ( {url} ) => {
  return(
    <ReactPlayer
        url={url}
        width="400px"
        height="50px"
        playing={false}
        controls={true}
      />
  );

}

