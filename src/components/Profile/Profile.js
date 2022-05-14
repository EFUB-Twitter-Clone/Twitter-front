import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfileTabs from "./ProfileTabs";
import ProfileEditModal from "./ProfileEditModal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

import Axios from "axios";

function Profile() {
  const [myData, setMyData] = useState();
  const fetchMyData = () => {
    Axios.get(`/users/${userNumber}`, {
      params: {
        userNumber: userNumber,
      },
    })
      .then(function (response) {
        // response
        console.log("나의 데이터", response);
        setMyData(response.data);
      })
      .catch(function (error) {
        // 오류발생시 실행
        console.log(error);
      })
      .then(function () {
        // 항상 실행
      });
  };

  useEffect(() => {
    //fetchMyData();
  }, []);

  //const user_name = myData.name;
  const user_id = myData?.userId;
  const user_name = myData?.name;
  const userNumber = 4;
  const self_introduction = myData?.readme;
  const [value, setValue] = useState(0);

  // 모달 관련
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="profile">
      <ProfileEditModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <div className="header">
        <IconButton aria-label="back">
          <ArrowBackIcon
            sx={{ fontSize: 25 }}
            onClick={() => console.log("home으로 이동")}
          />
        </IconButton>
        <h2 className="header__font">{user_name}</h2>
      </div>

      <div className="background" />
      <div className="profile__box">
        <div className="gap">
          <div className="profile__picture__containter">
            <img
              className="profile__picture"
              alt="프로필 사진을 엽니다"
              draggable
              src="https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png"
            />
          </div>
          <button className="profile__button" onClick={handleOpen}>
            프로필 수정
          </button>
        </div>
        <div className="profile__header">
          <div className="profile__username"> {user_name}</div>
          <div className="profile__userid"> @{user_id}</div>
        </div>
        <div className="profile__text">{self_introduction}</div>
        <div className="profile__date">
          <svg viewBox="0 0 24 24" aria-hidden="true" id="calendar_svg">
            <g>
              <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
              <circle cx="7.032" cy="8.75" r="1.285"></circle>
              <circle cx="7.032" cy="13.156" r="1.285"></circle>
              <circle cx="16.968" cy="8.75" r="1.285"></circle>
              <circle cx="16.968" cy="13.156" r="1.285"></circle>
              <circle cx="12" cy="8.75" r="1.285"></circle>
              <circle cx="12" cy="13.156" r="1.285"></circle>
              <circle cx="7.032" cy="17.486" r="1.285"></circle>
              <circle cx="12" cy="17.486" r="1.285"></circle>
            </g>
          </svg>
          가입일: 2022년 5월
        </div>
        <div className="profile__follow">
          <span style={{ marginRight: "20px" }}>
            <h4>1 </h4>
            <span>팔로우 중 </span>
          </span>

          <span style={{ marginRight: "20px" }}>
            <h4>0 </h4>
            <span>팔로워 </span>
          </span>
        </div>
      </div>
      <ProfileTabs myData={myData} />
    </div>
  );
}

export default Profile;
