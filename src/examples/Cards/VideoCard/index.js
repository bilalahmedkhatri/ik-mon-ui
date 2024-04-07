import { useMemo } from "react";

import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Team Stellar React components
import MDBox from "components/MDBox";
import ReactPlayer from "react-player";

// CardVideo configurations
// import configs from "examples/Cards/CardVideo/configs";

function CardVideo({ video }) {
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
              <CardMedia
                src={video}
                component="video" // "video, audio, picture, iframe, or img"
                sx={{
                  maxWidth: "100%",
                  margin: 0,
                  boxShadow: ({ boxShadows: { md } }) => md,
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              >
                <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
              </CardMedia>
            </MDBox>
          ),
          [video]
        )}
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of CardVideo
CardVideo.defaultProps = {
  video: "",
  color: "info",
  description: "",
};

// Typechecking props for the CardVideo
// CardVideo.propTypes = {
//   video: PropTypes.string.isRequired,
// };

export default CardVideo;
