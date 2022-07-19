import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

function Post({ profilePic, Image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={Image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineRoundedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <ShareOutlinedIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
