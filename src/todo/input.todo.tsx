import { useState } from "react";

interface Iprops {
  name: string;
  age: number;
  hoidanit: {
    gender: string;
    address: string;
  };
  ericFuntion: (value:string) => void;
  listTodo: string[];
  setListTodo: (value: string[]) => void;
}
const InputTodo = (props : Iprops) => {
  const {ericFuntion, listTodo, setListTodo} = props;
  const [todo,setTodo] = useState("");
  
  const handleClick = () => {
        if(!todo){alert("Please enter todo"); return;}
   setListTodo([...listTodo, todo]);
    setTodo("");
  }
  return (
    <div style={{ border: "1px solid red" }}>
      <div>Add new Todo</div>
      <input 
      value={todo}
      type="text" 
      onChange={(event) => {setTodo(event.target.value)}}
       />
      &nbsp;&nbsp;
        <button onClick={() => handleClick()}
          style={{ backgroundColor: "blue", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
          >Save</button>
       
      </div>
  );
};
export default InputTodo;
