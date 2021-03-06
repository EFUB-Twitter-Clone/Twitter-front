import React from "react";
import { useNavigate } from "react-router-dom";
import "./LeftSidebarProfile.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function LeftSidebarProfile() {
  const myId = {
    name: "이영지",
    id: "dldudwl",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRn2EiE6Ihsy9mPufplNhRjqGmybCslL7Hm0emKtdzA&s",
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile`);
  };

  return (
    <div className="profile__left" onClick={handleClick}>
      <div className="profile__right">
        <div className="profile__rightside">
          <div className="profile__img">
            <img className="profile__img__img" src={myId.profile} />
          </div>

          <div className="profile__info">
            <div className="profile__name">{myId.name}</div>
            <div className="profile__id">{myId.id}</div>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default LeftSidebarProfile;
