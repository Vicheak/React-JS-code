import { useState } from "react";

function ColorPicker() {
  //current state + state setter
  //to format code = Shitf + Alt + F
  const [color, setColor] = useState("gray");
  const background = { backgroundColor: color, padding: "50px" };

  //recommended
  const handleChangeColor = (color) => {
    setColor(color);
  };

  return (
    <>
      <h5>This is color picker app</h5>
      <div style={background}>
        <p className="text-white">This is color {color}</p>
        <button
          className="btn btn-danger"
          onClick={() => handleChangeColor("red")}
        >
          Change to Red
        </button>
        <br />
        <br />
        <button
          className="btn btn-warning"
          onClick={() => handleChangeColor("tomato")}
        >
          Change to Tomato
        </button>
        <br />
        <br />
        <button
          className="btn btn-success"
          onClick={() => handleChangeColor("green")}
        >
          Change to Green
        </button>
        <br />
        <br />
        <button
          className="btn btn-primary"
          onClick={() => handleChangeColor("blue")}
        >
          Change to Blue
        </button>
        <br />
      </div>
    </>
  );
}

export default ColorPicker;
