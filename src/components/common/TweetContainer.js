import React from "react";
import "./TweetContainer.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";

function TweetContainer() {
  return (
    <div className="tweetContainer">
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRn2EiE6Ihsy9mPufplNhRjqGmybCslL7Hm0emKtdzA&s" />

      <form className="tweetContainer__form">
        <div className="tweetContainer__input">
          <input
            className="tweetContainer__input__text"
            placeholder="무슨 일이 일어나고 있나요?"
            type="textarea"
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
              <button className="tweetContainer__tweetButton">트윗하기</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetContainer;