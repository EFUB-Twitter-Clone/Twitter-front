import React from "react";
import Feed from "./components/common/Feed";
import LeftSidebar from "./components/common/LeftSidebar";
import RightSidebar from "./components/common/RightSidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <LeftSidebar className="left__sidebar" />

      <Feed />
      <RightSidebar />
    </div>
  );
}

export default App;
