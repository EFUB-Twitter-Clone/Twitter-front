import React from "react";
import "../style/LeftSidebar.css";
import LeftSidebarTopic from "./LeftSidebarTopic";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LeftSidebarProfile from "./LeftSidebarProfile";

function LeftSidebar() {
  return (
    <div className="left__sidebar">
      <div className="left__sidebar__position">
        <TwitterIcon className="sidebar__twitterIcon" />
        <LeftSidebarTopic Icon={HomeIcon} text="홈" active={true} />
        <LeftSidebarTopic Icon={SearchIcon} text="탐색하기" />
        <LeftSidebarTopic Icon={NotificationsNoneIcon} text="알림" />
        <LeftSidebarTopic Icon={MailOutlineIcon} text="쪽지" />
        <LeftSidebarTopic Icon={BookmarkBorderIcon} text="북마크" />
        <LeftSidebarTopic Icon={ListAltIcon} text="리스트" />
        <LeftSidebarTopic Icon={PermIdentityIcon} text="프로필" />
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
