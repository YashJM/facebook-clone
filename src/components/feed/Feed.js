import React, { useState, useEffect } from "react";
import "./feed.css";
import StoryReel from "../stories/StoryReel";
import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";
import db from "../../firebase";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          Image={post.data.Image}
          message={post.data.message}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp}
          username={post.data.username}
        />
      ))}
    </div>

    // <div className="feed">
    //   <StoryReel />
    //   <MessageSender />

    //   <Post
    //     profilePic={"https://source.unsplash.com/collection/190727/10"}
    //     image={"https://source.unsplash.com/collection/190727/11"}
    //     username={username}
    //     timestamp={"time stamp"}
    //     message={"Testing the message"}
    //   />
    //   <Post />
    //   <Post />
    // </div>
  );
}

export default Feed;
