import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dummy from "../../data/feed.json";
import axios from "axios";

import Post from "../common/Post";

import FlipMove from "react-flip-move";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        display: "flex",
        justifyContent: "column",
        alignItems: "center",
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfileTabs(props) {
  const [value, setValue] = React.useState(0);

  const { myData } = props;
  const userNumber = 4;
  const myId = myData.userId;
  const myName = myData.name;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [myPosts, setMyPosts] = useState([]); // 내 게시글 정보 저장

  const fetchMyPosts = () => {
    axios
      .get(`/posts/${userNumber}`)
      .then(function (response) {
        // response'

        if (response.status === 200) {
          console.log("나의 게시글 데이터 받아오기 성공", response);
          setMyPosts(response.data);
        } else {
          console.log("나의 게시글 데이터 받아오기 실패");
        }
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
    //fetchMyPosts();
  }, []);

  const my_feed = (
    <FlipMove>
      {myPosts.map((post) => (
        <Post
          key={post.contents}
          displayName={myName}
          username={myId}
          verified={post.verified}
          text={post.contents}
          avatar={post.avatar}
          image={post.image}
          tag={post.tag}
          like={post.like}
          comment={post.comment}
          retweet={post.retweet}
        />
      ))}
    </FlipMove>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab
            label={<span style={{ fontWeight: "bold" }}>트윗</span>}
            {...a11yProps(0)}
          />
          <Tab label="트윗 및 답글" {...a11yProps(1)} />
          <Tab label="미디어" {...a11yProps(2)} />
          <Tab label="마음에 들어요" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {my_feed}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {my_feed}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img
          alt=""
          draggable="true"
          id="no_media"
          src="https://abs.twimg.com/sticky/illustrations/empty-states/masked-doll-head-with-camera-800x400.v1.png"
        />
        <h1>조명, 카메라... 첨부!</h1>
        <p>사진이나 동영상을 포함한 트윗을 전송하면 여기에 표시됩니다.</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1>아직 마음에 들어한 트윗이 없습니다.</h1>
        <p>
          좋아하는 트윗의 하트를 눌러 마음에 들어요 표시를 해보세요. 마음에
          들어한 트윗은 여기에 표시됩니다.
        </p>
      </TabPanel>
    </Box>
  );
}
