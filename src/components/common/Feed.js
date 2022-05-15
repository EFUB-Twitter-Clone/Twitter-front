import React, { useState, useEffect } from "react";

import Post from "./Post";
import "./Feed.css";

import FlipMove from "react-flip-move";
import TweetContainer from "./TweetContainer";
import dummy from "../../data/feed.json";
import axios from "axios";
import { SettingsInputAntenna } from "@material-ui/icons";

function Feed() {
  const [posts, setPosts] = useState([]);
  const getPostApi = () => {
    axios
      .get(`/posts`)
      .then(function (response) {
        if (response.status === 200) {
          console.log("전체 게시글 받아오기 성공", response);

          setPosts(response.data);
        } else {
          console.log("전체 게시글 데이터 받아오기 실패");
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log(posts);
      });
  };

  // post 정보 받아오기
  useEffect(() => {
    getPostApi();
  }, []);

  // post 삭제되거나 추가되었을 때
  useEffect(() => {
    getPostApi();
  }, [posts]);

  return (
    <div className="feed">
      <div className="header">
        <h2 className="header__font">홈</h2>
      </div>
      <TweetContainer />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.postNumber}
            postNum={post.postNumber}
            displayName={post.userNumber}
            username={post.userNumber}
            text={post.contents}
            avatar="https://pbs.twimg.com/profile_images/1515120415777050628/qrfYsX-1_400x400.jpg"
            image="https://pbs.twimg.com/media/FQ1b0nQVIAEzDqq?format=jpg&name=4096x4096"
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
