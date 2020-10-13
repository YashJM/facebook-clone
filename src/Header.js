import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import GroupIcon from "@material-ui/icons/Group";

import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";

import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook f logo (2019).svg"
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text"></input>
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <OndemandVideoIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <GroupIcon />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar alt="" src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddCircleRoundedIcon />
        </IconButton>
        <IconButton>
          <ForumRoundedIcon />
        </IconButton>
        <IconButton>
          <NotificationsRoundedIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownCircleRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
