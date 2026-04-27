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
  const [listTodo, setListTodo] = useState(["Todo 1", "Todo 2", "Todo 3", "Todo 4", "Todo 5", "Todo 6"]);
  const handleTest =(name: string) => {
   alert(`click me: ${name}`)
  }
  return (
    <div>
      <InputTodo 
      name={name} 
      age={age} 
      hoidanit={info} 
      ericFuntion={handleTest} 
      listTodo={listTodo}
      setListTodo={setListTodo}/>
      <br />
       <ul>
          {listTodo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
