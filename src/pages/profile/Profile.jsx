import "./profile.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { RiTwitterXLine } from "react-icons/ri";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.unsplash.com/photo-1523867574998-1a336b6ded04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="cover"
        />
      </div>
      <div className="profile-container">
        <div className="user-info-container">
          <div className="left">
            <img
              src="https://images.unsplash.com/photo-1634136647504-1719f5ec9bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              alt=""
              className="profileImg"
            />
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="item">
              <PlaceIcon />
              <span>USA</span>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <button>Follow</button>
              <EmailOutlinedIcon className="email" />
              <MoreVertIcon className="moreVert" />
            </div>
          </div>
        </div>
      </div>
      <div className="posts">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
