import React, { useState, useEffect } from "react";

import Post from "./Post";
import "./Feed.css";

import FlipMove from "react-flip-move";
import TweetContainer from "./TweetContainer";
import dummy from "../../data/feed.json";

function Feed() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    // post 정보 받아오기
  }, []);

  return (
    <div className="feed">
      <div className="header">
        <h2 className="header__font">홈</h2>
      </div>
      <TweetContainer />
      <FlipMove>
        {dummy.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            tag={post.tag}
            like={post.like}
            comment={post.comment}
            retweet={post.retweet}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
