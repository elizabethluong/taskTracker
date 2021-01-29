import React from "react";
import "./App.css";
import Recorder from "../recorder/Recorder";
import Calendar from "../Calender/Calendar"

function App() {
  return (
    <div className="App">
      <Recorder />
      <Calendar/>
    </div>
  );
}

export default App;
