// @mui material components
import Grid from "@mui/material/Grid";

// Team Stellar React components
import MDBox from "components/MDBox";

// Team Stellar React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

import image from "assets/images/home-decor-2.jpg";

import image_ from "assets/images/home-decor-2.jpg";

import CardMonitor from "examples/Cards/CardMonitor";
import { useState, useEffect } from "react";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  const [currentdate, setCurrentDate] = useState(new Date());
  const number_of_live_screens = [
    {
      name: "ahmed",
      os: "windows 10",
      dt: currentdate.toLocaleString(),
    },
    {
      name: "Usman",
      os: "Linux - Ubuntu",
      dt: currentdate.toLocaleString(),
    },
    {
      name: "Mariam",
      os: "Linux - Kali",
      dt: currentdate.toLocaleString(),
    },
    {
      name: "Raheel",
      os: "Linux - Mint",
      dt: currentdate.toLocaleString(),
    },
    {
      name: "Aashaaz",
      os: "MAC OS",
      dt: currentdate.toLocaleString(),
    },
  ];

  const [screens, setScreens] = useState([]);

  useEffect(() => {
    async function getScreens() {
      try {
        const screens = await axios.get("/users_monitor_data/");
        setScreens(screens.data);
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
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
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
                title="Followers"
                count="+91"
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
            {number_of_live_screens.map((e, key) => (
              <Grid item xs={12} md={6} lg={4} key={key}>
                <MDBox mb={3}>
                  <CardMonitor
                    color={key.name}
                    title={e.name}
                    os={e.os}
                    date={e.dt}
                    // date={`campaign ${key} sent days ago`}
                    image={image_}
                  />
                </MDBox>
              </Grid>
            ))}
          </Grid>
        </MDBox>
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
