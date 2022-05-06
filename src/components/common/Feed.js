import React, { useState, useEffect } from "react";

import Post from "./Post";
import "./Feed.css";

import FlipMove from "react-flip-move";
import TweetContainer from "./TweetContainer";

function Feed() {
  const [posts, setPosts] = useState([
    {
      text: `Are you ready? 💜 Here’s the wefie 
      @BTS_twt
       and we all have been waiting for!`,
      tag: " #MakeNightsEpic #withGalaxy #GalaxyxBTS",
      displayName: "Dj Pee Wee",
      username: "@AndersonPaak",
      verified: "verified",
      avatar:
        "https://pbs.twimg.com/profile_images/1515120415777050628/qrfYsX-1_400x400.jpg",
      image:
        "https://pbs.twimg.com/media/FQ1b0nQVIAEzDqq?format=jpg&name=4096x4096",
      comment: 6890,
      retweet: 366000,
      like: 1432000,
    },
    {
      text: `The stars was out this week! Love to my brothers 
      @bts_bighit`,
      displayName: "displayName",
      username: "username",
      verified: "verified",

      avatar: "avatar",
      image:
        "https://pbs.twimg.com/media/FPZ2cTxUcAEd0g-?format=jpg&name=large",
    },
  ]);

  useEffect(() => {
    // post 정보 받아오기
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header__font">홈</h2>
      </div>
      <TweetContainer />
      <FlipMove>
        {posts.map((post) => (
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
