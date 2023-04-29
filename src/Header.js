import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Notifications } from "@mui/icons-material";
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch  } from "react-redux";
import { auth } from "./firebase";
import { logout  } from "./features/userSlice";

const Header = () => {
  
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://pbs.twimg.com/profile_images/1508518003184349187/1KQYoqPY_400x400.png"
          alt=""
        />
        <div className="header__search">
          {/* searchicon */}
          <SearchIcon />

          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notification" />
        <HeaderOption avatar={true} onClick={logoutOfApp} title="user"/>
        
        
      </div>
    </div>
  );
};

export default Header;
