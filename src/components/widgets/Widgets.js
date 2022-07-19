import { Avatar } from "@material-ui/core";
import React from "react";
import "./Widgets.css";
import undraw_chatting_2yvo from "../../undraw_chatting_2yvo.svg";

function Widgets() {
  return (
    <div className="widgets">
      <h2>Live chat feature coming soon!</h2>

      <div className="chatWindow">
        <img src={undraw_chatting_2yvo} height="100%" alt="chat" />
      </div>
    </div>
  );
}

export default Widgets;
