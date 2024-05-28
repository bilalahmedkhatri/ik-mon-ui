import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";

// Team Stellar React components
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Dashboard components
import image_ from "assets/images/home-decor-2.jpg";
import CardMonitor from "examples/Cards/CardMonitor";
import axios from "axios";

function Dashboard() {
  const [videoTokeData, setVideoTokeData] = useState([]);

  useEffect(() => {
    async function getScreens() {
      try {
        const screens = await axios.get("http://192.168.1.85:8000/user_api/main/");
        setVideoTokeData(screens.data);
        console.log(videoTokeData());
      } catch (error) {
        console.log(error);
      }
    }
    getScreens();
    console.log(getScreens());
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Office/Home"
                count="1"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Online"
                count="4"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {videoTokeData.map((e, key) => (
              <Grid item xs={12} md={6} lg={4} key={key}>
                <MDBox mb={3}>
                  <Link to={"/video/" + e.video_url} hash={e.video_url} key={key}>
                    <CardMonitor
                      color={key.name}
                      title={e.user_name}
                      os={e.os}
                      date={e.date_create}
                      // date={`campaign ${key} sent days ago`}
                      image={image_}
                    />
                  </Link>
                </MDBox>
              </Grid>
            ))}
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
