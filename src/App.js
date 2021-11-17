import React from "react";
import "./App.css";

function App() {
  navigator.vibrate(10000);

  return (
    <div>
      <button onClick className="badge badge-primary">
        END OF DISCUSSION
      </button>
    </div>
  );
}

export default App;
