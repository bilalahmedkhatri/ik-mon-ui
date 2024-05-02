/**
=========================================================
* Team Stellar React - v2.2.0
=========================================================

* Copyright 2023 AzeemLab (https://www.azeemlab.com)

Coded by www.azeemlab.com

 =========================================================
*/

// but not tested yet with frames {ruf concept}.

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player"; // for video player controls
import PropTypes from "prop-types";

const VideoFramePlayer = ({ video }) => {
  return (
    <div>
      <h2>url : {video}</h2>
      <ReactPlayer
        url={video}
        playing
        // max-width={width}
        width="100%"
        // max-height={height}
        height="100%"
      />
    </div>
  );
};

VideoFramePlayer.propTypes = {
  video: PropTypes.string,
};

export default VideoFramePlayer;
