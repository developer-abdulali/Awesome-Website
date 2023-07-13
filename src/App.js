import "./App.css";
import NavComp from "./components/NavComp";
import UserDiv from "./components/UserDiv";

const App = ()=> {
  return (
    <div className="app-div">
      < NavComp />
      < UserDiv />
    </div>
  );
}

export default App;
