import React, { Fragment } from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form>
        <input type="text" required />
        <button>Add Todo</button>
      </form>
    </Fragment>
  );
}

const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);
