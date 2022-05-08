import React from "react";
import Feed from "./components/common/Feed";
import Profile from "./components/profile/Profile";
import LeftSidebar from "./components/common/LeftSidebar";
import RightSidebar from "./components/common/RightSidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <LeftSidebar className="left__sidebar" />

      <Profile />
      <RightSidebar />
    </div>
  );
}

export default App;
