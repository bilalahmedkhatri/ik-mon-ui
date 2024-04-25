/**
=========================================================
* Team Stellar React - v2.2.0
=========================================================

* Copyright 2023 AzeemLab (https://www.azeemlab.com)

Coded by www.azeemlab.com

 =========================================================
*/

// but not tested yet with frames {ruf concept}.

import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import ReactPlayer from "react-player"; // for video player controls

const VideoFramePlayer = () => {
  const uid = require("uuid");
  const [frameData, setFrameData] = useState(null);
  // connection successfully with "localhost"
  // create data straucture to handle data on server to allow receive data as per button click
  // most important receive data from server to play video //////// not tested yet with frames {ruf concept}.

  const [sendData, setSendData] = useState(null);
  const v = uid.v4();
  const APIData = v;
  // const APIData = "aashaaz_OS10";
  // useEffect(() => {
  //   // WebSocket logic to connect and receive frames
  //   // const url = `ws://192.168.1.85:8006/${APIData}/web`;
  //   const url = `ws://localhost:8006/${APIData}/web`;
  //   const ws = new WebSocket(url);
  //   // ws.addEventListener("message", (event) => setFrameData(event.data)); // Update frame data
  //   // ws.onmessage = (event) => console.log("result data", event.data); // Update frame data

  //   ws.addEventListener("open", (event) => {
  //     ws.send("Hello Server!");
  //   });
  //   ws.addEventListener("message", (event) => {
  //     console.log("Message from server ", event.data);
  //   });
  //   return () => ws.close(); // Clean up WebSocket on unmount
  // }, []);
  useEffect(() => {
    const socket = io(`ws://localhost:8006/${APIData}/web`); // Replace with your server URL

    socket.on("connect", () => {
      console.log("Connected to server!");
    });

    socket.on("message", (data) => {
      console.log("Received message:", data);
    });

    socket.emit("send-message", "Hello from the client!");
  });

  const videoSource = frameData ? `data:image/jpeg;base64,${frameData}` : null;

  return (
    <div>
      <Button onClick={sendData}>Send</Button>
      test
      <ReactPlayer controls url={videoSource} />
    </div>
  );
};

export default VideoFramePlayer;
