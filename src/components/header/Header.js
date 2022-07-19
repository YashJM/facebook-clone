import React from "react";
import "./Header.css";

import { Search, Home, OndemandVideo, Storefront, Group, AddCircleRounded, ForumRounded, NotificationsRounded, ArrowDropDownCircleRounded } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";

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
          <Search />
          <input placeholder="Search Facebook" type="text"></input>
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <Home />
        </div>
        <div className="header__option">
          <OndemandVideo />
        </div>
        <div className="header__option">
          <Storefront />
        </div>
        <div className="header__option">
          <Group />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar alt="" src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddCircleRounded />
        </IconButton>
        <IconButton>
          <ForumRounded />
        </IconButton>
        <IconButton>
          <NotificationsRounded />
        </IconButton>
        <IconButton>
          <ArrowDropDownCircleRounded />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
