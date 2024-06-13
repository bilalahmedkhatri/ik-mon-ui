// @mui material components
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

// Team Stellar React components
import MDBox from "components/MDBox";
import { CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";

function ImagePlayer() {
  const [videoUrl, setVideoUrl] = useState("");
  const [imgWidth, setImgWidth] = useState(1280);
  const { hashed } = useParams();

  useEffect(() => {
    const getCompleteVideoLink = async () => {
      const videoUrlServer = `http://192.168.1.85:5000/video_feed/${hashed}`;
      setVideoUrl(videoUrlServer);
    };

    getCompleteVideoLink();
  }, [hashed]);

  return (
    <MDBox mt={5} mb={3}>
      <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
        {/* {videoUrl === "" && () : ()} */}
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
