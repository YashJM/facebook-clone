import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";

import FavoriteIcon from "@material-ui/icons/Favorite";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import GroupIcon from "@material-ui/icons/Group";
import StorefrontIcon from "@material-ui/icons/Storefront";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={FavoriteIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={PeopleAltIcon} title="Friends" />
      <SidebarRow Icon={GroupIcon} title="Groups" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={OndemandVideoIcon} title="Video" />
      <SidebarRow Icon={EventAvailableIcon} title="Events" />
      <SidebarRow Icon={ArrowDropDownCircleIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
