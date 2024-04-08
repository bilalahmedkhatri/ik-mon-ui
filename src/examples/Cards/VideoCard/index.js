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

function CardMonitor({ video }) {
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
              // mt={-5}
              width="100.25%"
              shadow="xl"
            >
              {/* for cardmedia check out : https://mui.com/material-ui/api/card-media/ */}
            </MDBox>
          ),
          [video]
        )}
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
