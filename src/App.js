import React from "react";
import "./App.css";

function App() {
  navigator.vibrate(5000);

  return (
    <div>
      <button onClick="App()" className="badge badge-primary">
        END OF DISCUSSION
      </button>
    </div>
  );
}

export default App;
