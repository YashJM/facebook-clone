import { Avatar } from "@material-ui/core";
import React from "react";
import "./MessageSender.css";
import { useState } from "react";
import { useStateValue } from "./StateProvider";

import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      /** Keeping the page as it is after submit */
      db.collection("posts").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        Image: imageURL,
      });
      setInput("");
    }
  };

  // DB

  //

  return (
    <div className="messageSender">
      <div className="messageSender__top container">
        <Avatar src={user.photoURL} />

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind ` + `${user.displayName}` + `?`}
          ></input>
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="messageSender__input"
            placeholder={`Image URL `}
          ></input>
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "#F02849" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "#45BD62" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "#F7B928" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
