import "./navbar.scss";

// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { curentUser } = useContext(AuthContext);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>ViteSocial</span>
          </Link>
          <HomeOutlinedIcon />
          <GridViewOutlinedIcon />
          {darkMode ? (
            <WbSunnyOutlinedIcon onClick={toggle} />
          ) : (
            <DarkModeOutlinedIcon onClick={toggle} />
          )}
          {/* <div className="search">
              <SearchOutlinedIcon/>
              <input type="text" placeholder="Search"/>
            </div> */}
        </div>
        <div className="center">
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="right">
          <PersonOutlineOutlinedIcon />
          <EmailOutlinedIcon />
          <NotificationsOutlinedIcon />
          <div className="user">
            <img
              src={curentUser.profilePicture}
              alt=""
            />
            <span>{curentUser.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
