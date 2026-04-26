const EricComponent =() => {
    const name = 'Eric';
    const age = 30;

    const info = {
        name: 'Eric',
        age: 30,
        hobbies: ['coding', 'gaming', 'traveling']
    };
    const array = [1, 2, 3, 4, 5];
  return (
    <div>
    <h1 style={{ borderRadius:"5px",
    border: "2px solid black",
     padding: "10px",
            color: "red",
     }} >Hello : {JSON.stringify(array)}</h1>
{/* <img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/> */}
<ul>
    <li>Invent new traffic lights </li>
    <li>Rehearse a movie scene </li>
    <li>Improve the spectrum technology</li>
</ul>
</div>
  )
}
export default EricComponent;