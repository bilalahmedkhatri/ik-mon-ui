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

const VideoFramePlayer = () => {
  const [frameData, setFrameData] = useState(null);
  const APIData = "aashaaz_OS10";

  useEffect(() => {
    // WebSocket logic to connect and receive frames
    const url = `ws://192.168.1.85:8006/${APIData}/web`;
    const ws = new WebSocket(url);
    // ws.addEventListener("message", (event) => setFrameData(event.data)); // Update frame data
    // ws.onmessage = (event) => console.log("result data", event.data); // Update frame data
    ws.addEventListener("message", (event) => {
      console.log("Message from server ", event.data);
    });
    ws.addEventListener("open", (event) => {
      ws.send("Hello Server!");
    });
    return () => ws.close(); // Clean up WebSocket on unmount
  }, []);

  const videoSource = frameData ? `data:image/jpeg;base64,${frameData}` : null;

  return (
    <div>
      test
      <ReactPlayer controls url={videoSource} />
    </div>
  );
};

export default VideoFramePlayer;
