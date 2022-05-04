import React from "react";
import "../style/RightSidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function RightSidebar() {
  const people = [
    {
      key: 1,
      name: "이영지",
      id: "dldudwl",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRn2EiE6Ihsy9mPufplNhRjqGmybCslL7Hm0emKtdzA&s",
    },
    {
      key: 2,
      name: "이영지",
      id: "dldudwl",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRn2EiE6Ihsy9mPufplNhRjqGmybCslL7Hm0emKtdzA&s",
    },
    {
      key: 3,
      name: "이영지",
      id: "dldudwl",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRn2EiE6Ihsy9mPufplNhRjqGmybCslL7Hm0emKtdzA&s",
    },
  ];

  const trend = [
    {
      key: 0,
      trending: "대한민국에서 트랜드 중",
      topic: "윤하언니",
      tweet: "4,111",
    },
    {
      key: 1,
      trending: "대한민국에서 트랜드 중",
      topic: "윤하언니",
      tweet: "4,111",
    },
  ];
  return (
    <div className="right__sidebar">
      <div className="right__sidebar__input">
        <SearchIcon />
        <input placeholder="검색하기" type="text" />
      </div>
      <div className="right__container">
        <h2>내가 좋아할 만한 콘텐츠</h2>
        {people.map((one) => {
          return (
            <div className="profile" key={one.key}>
              <div className="profile__right">
                <div className="profile__img">
                  <img className="profile__img__img" src={one.profile} />
                </div>

                <div className="profile__info">
                  <div className="profile__name">{one.name}</div>
                  <div className="profile__id">{one.id}</div>
                </div>
              </div>
              <button className="follow__button">팔로우</button>
            </div>
          );
        })}
        <div className="more__text">더보기</div>
      </div>
      <div className="right__container">
        <h2>나를 위한 트렌드</h2>
        <div>
          {trend.map((myTrend) => {
            return (
              <div className="trending" key={myTrend.key}>
                <div className="trending__header">
                  <div className="trending__subtext">{myTrend.trending}</div>
                  <MoreHorizIcon />
                </div>
                <div className="trending__text">{myTrend.topic}</div>
                <div className="trending__subtext__tweet">
                  {myTrend.tweet} 트윗
                </div>
              </div>
            );
          })}
        </div>
        <div className="more__text">더보기</div>
      </div>
    </div>
  );
}

export default RightSidebar;
