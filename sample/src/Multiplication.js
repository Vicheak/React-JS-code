function Multiplication() {
  const name = "Vicheak"; //primitives variable (value)

  //camelCase 
  const myStyle = { //reference variable (address)
    color: "black",
    backgroundColor: "tomato",
  };

  const h3 = <h3 style={myStyle}>My name is {name}</h3>;

  return (
    <div>
      <h1>Multiplication in jsx</h1>
      {/* JavaScript expression */}
      <h5
        style={{
          backgroundColor: "lightgreen",
        }}
      >
        {5 * 5}
      </h5>
      {h3}
    </div>
  );
}

export default Multiplication;
