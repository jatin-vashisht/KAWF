import React from "react";

const Reel = ({src}) => {
  return (
    <video
      width="80%"
      height="80%"
      autoPlay
      controls
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Reel;
