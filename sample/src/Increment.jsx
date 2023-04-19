import { useState } from "react";

function Increment() {
  //[currentState, stateSetter]
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    //using callback function
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h4>Set new state depending on old state</h4>
      <p>Value of counting : {count}</p>
      <button className="btn btn-danger" onClick={handleIncrement}>
        Count
      </button>
    </>
  );
}

export default Increment;
