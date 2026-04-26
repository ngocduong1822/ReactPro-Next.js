import { sayHi } from "./say";

const MyFirstComponent = () => {
  sayHi("John");
  return (
    <div>
      <h1>My First Component</h1>
    </div>
  );
};
export default MyFirstComponent;
