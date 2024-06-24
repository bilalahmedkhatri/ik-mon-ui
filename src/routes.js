import Dashboard from "layouts/dashboard";
import UsersTable from "layouts/tables";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Player from "layouts/player";
import Profile from "layouts/profile";

import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/",
    component: <Dashboard />,
    visibility: 1,
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/users",
    component: <UsersTable />,
    visibility: 1,
  },
  {
    type: "collapse",
    name: "Video",
    key: "video",
    icon: <PlayArrowIcon />, //<Icon fontSize="small">VP</Icon>,
    route: "/video/:hashed",
    component: <Player />,
    visibility: 1,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
    visibility: 1,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/login",
    component: <SignIn />,
    visibility: 0,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">Sign Up</Icon>,
    route: "/sign-up",
    component: <SignUp />,
    visibility: 0,
  },
];

export default routes;
