import React, { Fragment, useState, useReducer } from "react";
import ReactDOM from "react-dom";

function App() {
  const reducer = (state, action) => {
    switch (action) {
      case "ADD":
        return state + 1;
      case "SUB":
        return state - 1;
      case "RES":
        return (state = 0);
      default:
        return state;
    }
    return state;
  };
  const [value, setValue] = useState("");
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <Fragment>
      <div>{count}</div>
      <button onClick={() => dispatch("ADD")}>+</button>
      <button onClick={() => dispatch("SUB")}>-</button>
      <button onClick={() => dispatch("RES")}>reset</button>
    </Fragment>
  );
}

const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);
