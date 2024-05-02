// @mui material components
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import axios from "axios";

// Team Stellar React components
import MDBox from "components/MDBox";
import { Button } from "@mui/material";

// Team Stellar React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/profile/components/Header";

import ReactPlayer from "react-player";
import url_video from "/home/bilal/Developement/ik/monitor/frontend/src/layouts/video-player/video.mp4";

import VideoFramePlayer from "./components";

function VideoPlayer() {
  const [video, setVideo] = useState("");
  const [width, setWidth] = useState(1280);
  const [height, setHeight] = useState(720);
  const [iaPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000");
        if (response.data.url === url_video) {
          // setVideo(url_video);
          setVideo(response.data.url);
        }
        console.log(response.data.url, "url :", url_video);
      } catch (error) {
        console.log(response.error);
      }
    };
    console.log("type of :", typeof `response`);

    fetchVideoInfo();
  }, []);

  // const handlePlay = async () => {
  //   setIsPlaying(true);
  //   try {
  //     await axios.post("http://127.0.0.1:5000"); // Trigger playback on server
  //   } catch (error) {
  //     console.error("Error playing video:", error);
  //     setIsPlaying(false); // Reset state on error
  //   }
  // };

  console.log(video);
  return (
    <DashboardLayout>
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} xl={12} sx={{ display: "flex" }}>
              <MDBox
                defaultValue={30}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  color: "success.main",
                }}
              >
                <VideoFramePlayer video={video} />
                {/* {iaPlaying && <video src={video.url} controls />} */}
                {/* <video src={url_video} autoPlay loop /> */}
                {/* <video src={video} autoPlay loop /> */}
                {/* {/* {iaPlaying && ( */}
                {/* <ReactPlayer
                  url={video.url}
                  url={url_video}
                  playing
                  max-width={width}
                  width="100%"
                  max-height={height}
                  height="100%"
                /> */}
                {/* )} */}
                {/* <Button onClick={handlePlay}> click get data</Button> */}
                {video}
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default VideoPlayer;
