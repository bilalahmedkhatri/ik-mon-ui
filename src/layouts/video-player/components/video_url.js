import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

export const VideoUrl = ({ link }) => {
  return (
    <div>
      <h2>url : {link}</h2>
      <ReactPlayer
        url={url_video}
        playing
        max-width={width}
        width="100%"
        max-height={height}
        height="100%"
      />
    </div>
  );
};

VideoUrl.propTypes = {
  link: PropTypes.string,
};
