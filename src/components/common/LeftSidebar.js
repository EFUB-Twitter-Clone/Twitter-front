import React from "react";
import "./LeftSidebar.css";

import LeftSidebarTopic from "./LeftSidebarTopic";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LeftSidebarProfile from "./LeftSidebarProfile";
import { useNavigate, Link } from "react-router-dom";

function LeftSidebar() {
  const navigate = useNavigate();
  const handleClickProfile = () => {
    navigate(`/profile`);
  };
  const handleClickHome = () => {
    navigate(`/`);
  };
  return (
    <div className="left__sidebar">
      <div className="left__sidebar__position">
        <TwitterIcon className="sidebar__twitterIcon" />
        <div onClick={handleClickHome} style={{ cursor: "pointer" }}>
          <LeftSidebarTopic Icon={HomeIcon} text="홈" active={true} />
        </div>
        <LeftSidebarTopic Icon={SearchIcon} text="탐색하기" />
        <LeftSidebarTopic Icon={NotificationsNoneIcon} text="알림" />
        <LeftSidebarTopic Icon={MailOutlineIcon} text="쪽지" />
        <LeftSidebarTopic Icon={BookmarkBorderIcon} text="북마크" />
        <LeftSidebarTopic Icon={ListAltIcon} text="리스트" />
        <div onClick={handleClickProfile} style={{ cursor: "pointer" }}>
          <LeftSidebarTopic Icon={PermIdentityIcon} text="프로필" />
        </div>

        <LeftSidebarTopic Icon={MoreHorizIcon} text="더보기" />

        <button className="sidebar__btn__tweet">트윗하기</button>
        <div className="sidebar__profile">
          <LeftSidebarProfile />
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
