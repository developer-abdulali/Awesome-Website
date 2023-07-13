import "./App.css";
import NavComp from "./components/NavComp";
import Slider from "./components/Slider";
import UserDiv from "./components/UserDiv";

const App = ()=> {
  return (
    <div className="app-div">
      <NavComp />
      <UserDiv />
      <Slider />
    </div>
  );
}

export default App;
