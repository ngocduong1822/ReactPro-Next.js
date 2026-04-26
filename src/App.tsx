import { useState } from "react";
import "./App.css";
import InputTodo from "./todo/input.todo";

function App() {
  const name = "React";
  const age = 5;
  const info = {
    gender: "Male",
    address: "Hanoi",
  };
  const todos=["Todo 1", "Todo 2", "Todo 3", "Todo 4", "Todo 5", "Todo 6"];
  return (
    <div>
      <div className="parent">
        <div className="child">Child 1</div>
      </div>
      <InputTodo name={name} age={age} hoidanit={info} />
      <ul>
        {todos.map((item, index) => {
         return (<li key={index}>{item}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
