import "./navbar.scss";

// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="left">
          <Link to='/' style={{textDecoration:'none'}}>
            <span>ViteSocial</span>
          </Link>
            <HomeOutlinedIcon/>
            <GridViewOutlinedIcon/>
            <DarkModeOutlinedIcon/>
            <div className="search">
              <SearchOutlinedIcon/>
              <input type="text" placeholder="Search"/>
            </div>
        </div>
        <div className="right">
          <PersonOutlineOutlinedIcon/>
          <EmailOutlinedIcon/>
          <NotificationsOutlinedIcon/>
          <div className="user">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" alt="" />
            <span>Josh Mormen</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
