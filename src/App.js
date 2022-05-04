import "./App.css";
import Feed from "./component/Feed";
import LeftSidebar from "./component/LeftSidebar";
import RightSidebar from "./component/RightSidebar";

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
