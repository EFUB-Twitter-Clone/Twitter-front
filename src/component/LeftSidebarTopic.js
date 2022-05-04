import React from "react";
import "../style/LeftSidebarTopic.css";
function LeftSidebarTopic({ Icon, text, active }) {
  return (
    <div className="sidebarOption">
      <Icon className="sidebarOption__icon" />
      <h2 className="sidebarOption__text">{text}</h2>
    </div>
  );
}

export default LeftSidebarTopic;
