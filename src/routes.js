import Dashboard from "layouts/dashboard";
import UsersTable from "layouts/tables";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Player from "layouts/player";
import Profile from "layouts/profile";

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
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/users",
    component: <UsersTable />,
  },
  {
    type: "collapse",
    name: "Video",
    key: "video",
    icon: <PlayArrowIcon />, //<Icon fontSize="small">VP</Icon>,
    route: "/video/:hashed",
    component: <Player />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
];

export default routes;
