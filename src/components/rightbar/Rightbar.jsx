import "./rightbar.scss";

import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>
                <ControlPointIcon />
              </button>
              <button>
                <RemoveCircleOutlineOutlinedIcon />
              </button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>
                <ControlPointIcon />
              </button>
              <button>
                <RemoveCircleOutlineOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="item">
          <span>Latest Activitises</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
                alt=""
              />
              <p>
                <span>Jane Doe </span>
                Changed ther cover picture
              </p>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
                alt=""
              />
              <p>
                <span>Jane Doe </span>
                Changed ther cover picture
              </p>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
                alt=""
              />
              <p>
                <span>Jane Doe </span>
                Changed ther cover picture
              </p>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
                alt=""
              />
              <p>
                <span>Jane Doe </span>
                Changed ther cover picture
              </p>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="item">
          <span>Online firends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
                alt=""
              />
              <div className="online"></div>
              <span>Jane Doe </span>
            </div>
            <div className="buttons">
              <span>Active</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
                alt=""
              />
              <div className="online"></div>
              <span>Jane Doe </span>
            </div>
            <div className="buttons">
              <span>Active</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
                alt=""
              />
              <div className="online"></div>
              <span>Jane Doe </span>
            </div>
            <div className="buttons">
              <span>Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
