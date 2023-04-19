import React from "react";

function App() {
  const greeting = <h1 id="hello">Hello World!</h1>;

  const age = 16;
  const isSunday = true;
  const items = [
    "Shopping",
    "Walking",
    "Reading",
    "Exercising",
    "Singing",
    "Shopping",
  ];
  const listItems = items.map((item, i) => (
    <li key={item + i}>
      <h4>{item}</h4>
    </li>
  ));
  const ul = <ul>{listItems}</ul>;

  const navItems = ["home", "about", "products", "contacts", "sign up"];
  const navLists = navItems.map((item, i) => (
    <li className="nav-item" key={item + i}>
      <a className="nav-link active" aria-current="page" href={"/" + item}>
        {item}
      </a>
    </li>
  ));

  const handleClick = () => {
    //window.alert("Hello My Friends");
    alert("Hello My Friends");
  };

  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">{navLists}</ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {greeting}
      <p className="myHello">Hello React Application</p>
      <div className="myImage">
        <img src="https://picsum.photos/id/237/200/300" alt="showPic" />
      </div>
      <div className="container">
        <div>
          <button className="btn btn-danger" onClick={handleClick}>
            Click me
          </button>
        </div>
        <div className="mt-4">
          {age >= 18
            ? "You are eligible to vote"
            : "You are not allowed to vote!"}
        </div>
        <div className="mt-4">
          {isSunday && (
            <div>
              <span>Let's hang out!</span>
              <img
                src="https://picsum.photos/seed/picsum/200/300"
                alt="demo_pic"
              />
            </div>
          )}
        </div>
        <div className="mt-4">{ul}</div>
      </div>
    </React.Fragment>
  );
}

export default App;