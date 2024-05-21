// @mui material components
import React, { useState, useEffect } from "react";

// Team Stellar React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

// Components
import ImagePlayer from "layouts/videoPlayer/components/imagePlayer";

// Overview page components
import Header from "layouts/profile/components/Header";

function VideoPlayer() {
  return (
    <DashboardLayout>
      <Header>
        <ImagePlayer />
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default VideoPlayer;
