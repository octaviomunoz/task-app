import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter new task"
        onChange={(e) => console.log(e)}
      />

      <button onClick={() => alert("clicked")}>Save Task</button>
    </div>
  );
}

export default App;
