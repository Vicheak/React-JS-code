import React from "react";

class Navbar extends React.Component {
  render() {
    const navPages = this.props.pages.map((link, i) => (
      <li className="nav-item" key={link + i}>
        <a className="nav-link active" aria-current="page" href={"/" + link}>
          {link}
        </a>
      </li>
    ));

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-danger-subtle">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">{navPages}</ul>
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
      </>
    );
  }
}

export default Navbar;
