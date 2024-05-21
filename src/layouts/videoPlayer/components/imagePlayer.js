// @mui material components
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

// Team Stellar React components
import MDBox from "components/MDBox";
import { CardMedia } from "@mui/material";

function ImagePlayer() {
  const [videoUrl, setVideoUrl] = useState("");
  const [imgWidth, setImgWidth] = useState(1280);
  const [iaPlaying, setIsPlaying] = useState(false);
  const [userName, setuserName] = useState(
    "eb24402114b8211e1e7409ae4c2ecaee416ef64de2e6333d1a3ed94421e9e85dbebe96b2968a649092821e490f0bde20af3bdc8865229899acce8603f8cd6944"
  );

  useEffect(() => {
    const getCompleteVideoLink = async () => {
      const videoUrlServer = `http://127.0.0.1:5000/${userName}/video_feed`;
      setVideoUrl(videoUrlServer);
    };

    getCompleteVideoLink();
  }, []);

  return (
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
  );
}

export default ImagePlayer;
