import React, { useState } from "react";
import { DarkMode } from "./Components/DarkMode";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Child } from "./Components/Child";

// import { TextAnalyzer } from "./Components/TextAnalyzer";

const App = () => {
  // const myList = ["A", "B", "C", "D", "E"];
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      {/* <Child name="Safwan" /> */}
      {/* <MapList myList={myList} /> */}

      <DarkMode dark={mode} toggle={toggle} />
    </div>
  );
};

export default App;
