import React, { useState } from "react";
import "./TweetContainer.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifOutlinedIcon from "@mui/icons-material/GifOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import axios from "axios";

function TweetContainer() {
  const [mytweet, setMytweet] = useState("");

  const onMytweetChange = (e) => {
    setMytweet(e.target.value);
    console.log(mytweet);
  };

  const addMytweet = () => {
    axios
      .post(`posts`, {
        userNumber: 4,
        contents: mytweet,
      })
      .then(function (response) {
        console.log(response);
        console.log("게시글 작성 완료");
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log(mytweet);
        setMytweet("");
      });
  };
  function onHandleSubmit(e) {
    e.preventDefault();
    addMytweet();
  }

  return (
    <div className="tweetContainer">
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRn2EiE6Ihsy9mPufplNhRjqGmybCslL7Hm0emKtdzA&s" />

      <form className="tweetContainer__form" onSubmit={onHandleSubmit}>
        <div className="tweetContainer__input">
          <input
            className="tweetContainer__input__text"
            placeholder="무슨 일이 일어나고 있나요?"
            type="textarea"
            onChange={onMytweetChange}
            value={mytweet}
          />
          <div className="tweetContainer__footer">
            <div className="tweetContainer__icons">
              <ImageOutlinedIcon className="tweetContainer__icon" />
              <GifOutlinedIcon className="tweetContainer__icon" />
              <AssessmentOutlinedIcon className="tweetContainer__icon" />
              <TagFacesIcon className="tweetContainer__icon" />
              <EventNoteIcon className="tweetContainer__icon" />
              <LocationOnOutlinedIcon className="tweetContainer__icon" />
            </div>
            <div>
              <button className="tweetContainer__tweetButton" type="submit">
                트윗하기
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetContainer;
