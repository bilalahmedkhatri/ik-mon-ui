// @mui material components
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

// Team Stellar React components
import MDBox from "components/MDBox";
import { CardMedia } from "@mui/material";

// Team Stellar React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/profile/components/Header";

function VideoPlayer() {
  const [videoUrl, setVideoUrl] = useState("");
  const [imgWidth, setImgWidth] = useState(1280);
  const [iaPlaying, setIsPlaying] = useState(false);
  const [userName, setuserName] = useState("x43e9377");

  useEffect(() => {
    const getCompleteVideoLink = async () => {
      const videoUrlServer = `http://127.0.0.1:5000/${userName}/video_feed`;
      setVideoUrl(videoUrlServer);
    };

    getCompleteVideoLink();
  }, []);

  return (
    <DashboardLayout>
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
            <CardMedia
              component="img"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                color: "success.main",
                maxWidth: imgWidth,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              image={videoUrl}
            />
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default VideoPlayer;
