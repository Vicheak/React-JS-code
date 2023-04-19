import { useState } from "react";

function AddItem() {
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  //types of functions
  //1. named function
  //syntax :
  //function myFunc1(){...}
  //2. anonymous function
  //syntax :
  //const myFunc1 = function(){...}
  //3. arrow function
  //syntax :
  //const myFunc1 = () => {...}

  //arrow function with event
  const handleChange = (e) => {
    //ទាញតម្លៃចេញពី event ដែលយើង input បញ្ចូល (onChange)
    const { target } = e;
    const { value } = target;
    setItem(value);
  };

  const handleAdd = () => {
    if (item !== null) {
      //using spread syntax to set from previous state
      setItems((prev) => [...prev, [item]]);
      setItem(null);
    } else {
      alert("Please enter any item!");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="bg-danger-subtle p-4">
          {items.length !== 0 ? (
            <ul>
              {items.map((item, i) => (
                <li key={item + i}>{item}</li>
              ))}
            </ul>
          ) : (
            <div>There is no item in the database!</div>
          )}
        </div>
        <div className="form-group">
          <br />
          <h4>Please Enter Any Item</h4>
          {/* template string */}
          <label htmlFor="item">
            {item ? `Item : ${item}` : "Please enter any item!"}
          </label>
          <br />
          <br />
          <input
            type="text"
            className="form-control"
            id="item"
            name="item"
            value={item ? item : ""}
            onChange={handleChange}
          />
          <br />
          <button className="btn btn-danger" onClick={handleAdd}>
            Add Item
          </button>
        </div>
      </div>
    </>
  );
}

export default AddItem;
