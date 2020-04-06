import React from "react";

import SomethingWithFade from "./SomethingWithFade";
import "create-react-library-boilerplate/dist/index.css";

const App = () => {
  return (
    <div>
      <div style={{ height: "300px", backgroundColor: "red" }}>
        <h2>something 1</h2>
      </div>
      <div style={{ height: "300px", backgroundColor: "blue" }}>
        <h2>something 2</h2>
      </div>
      <div style={{ height: "300px", backgroundColor: "red" }}>
        <h2>something 1</h2>
      </div>
      <div style={{ height: "300px", backgroundColor: "blue" }}>
        <h2>something 2</h2>
      </div>
      <div style={{ height: "300px", backgroundColor: "red" }}>
        <h2>something 1</h2>
      </div>
      <div style={{ height: "300px", backgroundColor: "blue" }}>
        <h2>something 2</h2>
      </div>
      <div style={{ height: "300px", backgroundColor: "red" }}>
        <h2>something 1</h2>
      </div>
      <div style={{ height: "300px", backgroundColor: "blue" }}>
        <h2>something 2</h2>
      </div>
      <SomethingWithFade />
    </div>
  );
};

export default App;
