import React from "react";
import "./App.css";
import Diploms from "./Components/Diploms";
import Timer from "./Components/Timer";
import HeaderNav from "./Components/Header/HeaderNav";
import SectionFooter from "./Components/Footer/SectionFooter";
import SectionMain from "./Components/MainContainer";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <SectionMain />
      <Diploms />
      <SectionFooter />
      <Timer />
    </div>
  );
}

export default App;
