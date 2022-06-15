import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
// import {
//   DashboardIcon,
//   PersonOutlineOutlinedIcon,
//   Inventory2OutlinedIcon,
//   AirportShuttleIcon,
//   QueryStatsIcon,
//   NotificationsNoneOutlinedIcon,
//   SettingsSystemDaydreamOutlinedIcon,
//   PsychologyOutlinedIcon,
//   SettingsApplicationsOutlinedIcon,
//   AccountCircleOutlinedIcon,
//   ExitToAppOutlinedIcon,
//   EventOutlinedIcon,
// } from "@mui/icons-material";

const Sidebar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const { dispatch: authDispatch } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <EventOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <Inventory2OutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <AirportShuttleIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span onClick={() => authDispatch({ type: "LOGOUT" })}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
        <div
          className="colorOption"
          // onClick={() => dispatch({ type: "BLUE" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
