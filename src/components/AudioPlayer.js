import ReactPlayer from "react-player";

export const AudioPlayer = ( {url} ) => {
  return(
    <ReactPlayer
        url={url}
        width="fit-container"
        height="50px"
        playing={false}
        controls={true}
      />
  );

}

