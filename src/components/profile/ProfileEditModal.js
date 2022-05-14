import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import "./ProfileEditModal.css";
import { API_URL } from "../../constants/config";
import Axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
};

function ProfileEditModal({
  handleOpen,
  handleClose,
  open,
  setOpen,
  userNumber,
  userName,
  userText,
  userId,
  fetchMyData,
}) {
  const [name, setName] = useState(userName);
  const [text, setText] = useState(userText);

  const editMyData = () => {
    Axios.post(`/users/${userNumber}`, {
      name: name,
      readme: text,
      userId: userId,
    })
      .then(function (response) {
        // response
        console.log(response);
        alert("저장이 완료되었습니다.");
        fetchMyData();
      })
      .catch(function (error) {
        // 오류발생시 실행
        console.log(error);
      })
      .then(function () {
        // 항상 실행
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="header">
            <IconButton aria-label="clear">
              <ClearIcon sx={{ fontSize: 25 }} onClick={handleClose} />
            </IconButton>
            <h2 className="header__font">프로필 수정</h2>
            <button id="save__button" onClick={editMyData}>
              {" "}
              저장
            </button>
          </div>

          <div className="background" />

          <div style={{ marginBottom: "10%", marginLeft: "12px" }}>
            <div className="profile__picture__containter">
              <img
                className="profile__picture"
                alt="프로필 사진을 엽니다"
                draggable
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png"
              />
            </div>
          </div>
          <div className="container">
            <div className="input__container">
              <div className="input__label">이름</div>
              <input
                autocapitalize="sentences"
                autocomplete="off"
                autocorrect="on"
                maxlength="50"
                name="displayName"
                spellcheck="true"
                type="text"
                dir="auto"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="container">
            <div className="input__container">
              <div className="input__label">자기소개</div>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ProfileEditModal;
