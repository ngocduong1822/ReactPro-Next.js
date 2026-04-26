interface Iprops {
  name: string;
  age: number;
  hoidanit: {
    gender: string;
    address: string;
  };
}
const InputTodo = (props : Iprops) => {
  // const { name, age, hoidanit: info } = props;
  return (
    <div>
      {/* <div>Name: {name}</div>
      <div>gender: {info.gender}</div>
      <div>address: {info.address}</div> */}
      <div>Add new Todo</div>
      <input type="text" placeholder="Enter new todo" />
      &nbsp;&nbsp;
      <button>Save</button>
    </div>
  );
};
export default InputTodo;
