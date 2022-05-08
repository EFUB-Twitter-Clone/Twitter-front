import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dummy from "../../data/feed.json";

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

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <FlipMove>
          {dummy.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
              tag={post.tag}
              like={post.like}
              comment={post.comment}
              retweet={post.retweet}
            />
          ))}
        </FlipMove>
      </TabPanel>
      <TabPanel value={value} index={1}>
        트윗 및 답글
      </TabPanel>
      <TabPanel value={value} index={2}>
        미디어
      </TabPanel>
      <TabPanel value={value} index={3}>
        마음에 들어요
      </TabPanel>
    </Box>
  );
}
