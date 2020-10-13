import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://source.unsplash.com/collection/190727/2"
        profileSrc="https://source.unsplash.com/collection/190727/3"
        title="User 01"
      />
      <Story
        image="https://source.unsplash.com/collection/190727/4"
        profileSrc="https://source.unsplash.com/collection/190727/5"
        title="User 02"
      />
      <Story
        image="https://source.unsplash.com/collection/190727/6"
        profileSrc="https://source.unsplash.com/collection/190727/7"
        title="User 03"
      />
      <Story
        image="https://source.unsplash.com/collection/190727/8"
        profileSrc="https://source.unsplash.com/collection/190727/9"
        title="User 04"
      />
    </div>
  );
}

export default StoryReel;
