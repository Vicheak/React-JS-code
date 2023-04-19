import { useState } from "react";
import YesNoQuestion from "./YesNoQuestion";

function FunctionComponent() {
  //destructuring methodology
  const [name, setName] = useState();
  const [color, setColor] = useState("black"); //initialize value to current state
  //declare state as object
  const [student, setStudent] = useState({ id: 1001, name: "Dara" });
  //declare state as array
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4]);
  //declare state as boolean
  const [isAllowed, setIsAllowed] = useState(false);

  const question = "Can you create a web app in react language?";

  return (
    <>
      <h3>This is a function component</h3>
      <YesNoQuestion question={question} />
      <div>How to access useState's current state</div>
      <p>This is color {color}</p>
      <p>This student : {student.name}</p>
      <div>
        {numbers.map((item, i) => (
          <p key={item + i} style={{ marginLeft: "50px" }}>
            {item}
          </p>
        ))}
      </div>
    </>
  );
}

export default FunctionComponent;
