import "./App.css";
import CommentComp from "./components/CommentComp";
import NavComp from "./components/NavComp";
import Slider from "./components/Slider";
import UserDiv from "./components/UserDiv";

const App = ()=> {
  return (
    <div className="app-div">
      <NavComp />
      <UserDiv />
      <Slider />
      <CommentComp />
    </div>
  );
}

export default App;
