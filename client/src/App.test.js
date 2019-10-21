import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const name = "Josh Perez";
// const element = <h1>Hello, {name}</h1>;

ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
