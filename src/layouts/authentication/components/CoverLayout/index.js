// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Team Stellar React components
import MDBox from "components/MDBox";

// Team Stellar React example components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication pages components
import Footer from "layouts/authentication/components/Footer";

// axios api component
import getBackData from "apis/backend";

function CoverLayout({ image, children }) {
  const [videoTokenData, setVideoTokenData] = useState([]);
  const [totalScreenLive, setTotalScreenLive] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getScreens() {
      const { bStatus, bRes } = await getBackData("/user_api/main/");
      if (bStatus === "success") {
        setVideoTokenData(bRes);
        // setTotalScreenLive(bRes);
      } else if (bStatus === "fail") {
        setError(bRes);
        console.log("failes");
      }
    }
    getScreens();
  }, []);

  return (
    <PageLayout>
      <MDBox
        position="absolute"
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MDBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </PageLayout>
  );
}

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
