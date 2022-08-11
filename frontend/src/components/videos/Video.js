import React from "react";
import ReactPlayer from "react-player";

const Video = ({linktovideo}) => {

  return (
    <div style={{paddingRight: '10px', paddingLeft: '10px'}}>
      <ReactPlayer url={linktovideo} width="280px" height="150px" controls />
    </div>
  );
}

export default Video;