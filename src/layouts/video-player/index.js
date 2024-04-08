// @mui material components
import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Team Stellar React components
import MDBox from "components/MDBox";

// Team Stellar React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/profile/components/Header";

import ReactPlayer from "react-player";

import VideoMedia from "./components/PlatformSettings";

function VideoPlayer() {
  return (
    <DashboardLayout>
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={12} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              {/* <ReactPlayer /> */}
              <VideoMedia />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default VideoPlayer;
