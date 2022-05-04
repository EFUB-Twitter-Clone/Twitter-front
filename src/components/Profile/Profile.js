import React from "react";
import "./Profile.css";
function Profile() {
  return (
    <div className="profile">
      <div className="background" />
      <img
        className="profile__picture"
        alt="프로필 사진을 엽니다"
        draggable
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png"
      />
    </div>
  );
}

export default Profile;
