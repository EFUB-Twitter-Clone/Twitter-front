import React from "react";
import Feed from "./components/common/Feed";
import Profile from "./components/Profile/Profile";
import LeftSidebar from "./components/common/LeftSidebar";
import RightSidebar from "./components/common/RightSidebar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <LeftSidebar className="left__sidebar" />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        <RightSidebar />
      </div>
    </Router>
  );
}

export default App;
