import { useMemo } from "react";

import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Team Stellar React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// CardMonitor configurations
// import configs from "examples/Cards/CardMonitor/configs";

function CardMonitor({ color, title, os, description, date, image }) {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <MDBox
              position="relative"
              variant="gradient"
              borderRadius="lg"
              coloredShadow={color}
              mt={-5}
              width="100.25%"
              shadow="xl"
            >
              <CardMedia
                src={image}
                component="img"
                title={title}
                sx={{
                  maxWidth: "100%",
                  margin: 0,
                  boxShadow: ({ boxShadows: { md } }) => md,
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </MDBox>
          ),
          [color, image]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1}>
              UserName
            </MDTypography>
            <MDTypography variant="h6" textTransform="capitalize" sx={{ mt: 0.15, ml: 0.5 }}>
              <>
                <strong>:</strong> {title}
              </>
            </MDTypography>
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1}>
              OS
            </MDTypography>
            <MDTypography variant="h6" textTransform="capitalize" sx={{ mt: 0.15, ml: 0.5 }}>
              <>
                <strong>:</strong> {os}
              </>
            </MDTypography>
          </MDBox>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </MDTypography>
            <MDTypography variant="button" color="text" fontWeight="light">
              {date}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of CardMonitor
CardMonitor.defaultProps = {
  color: "info",
  description: "",
};

// Typechecking props for the CardMonitor
CardMonitor.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  os: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardMonitor;
