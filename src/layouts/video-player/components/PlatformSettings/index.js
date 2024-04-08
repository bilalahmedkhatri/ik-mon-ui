/**
=========================================================
* Team Stellar React - v2.2.0
=========================================================

* Copyright 2023 AzeemLab (https://www.azeemlab.com)

Coded by www.azeemlab.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// but not tested yet with frames {ruf concept}.

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player"; // for video player controls

const VideoFramePlayer = () => {
  const [frameData, setFrameData] = useState(null);
  const APIData = "aashaaz_OS10";

  useEffect(() => {
    // WebSocket logic to connect and receive frames
    const url = `ws://localhost:8765/${APIData}`;
    const ws = new WebSocket(url);
    ws.onmessage = (event) => setFrameData(event.data); // Update frame data
    return () => ws.close(); // Clean up WebSocket on unmount
  }, []);

  const videoSource = frameData ? `data:image/jpeg;base64,${frameData}` : null;

  return (
    <div>
      <ReactPlayer controls url={videoSource} />
    </div>
  );
};

export default VideoFramePlayer;
