import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const logoutMethod = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar sticky-top navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          RESTOB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/" className="dropdown-item" aria-current="page">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="dropdown-item"
                    aria-current="page"
                  >
                    Category List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ingredients"
                    className="dropdown-item"
                    aria-current="page"
                  >
                    Ingredient List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="dropdown-item"
                    aria-current="page"
                  >
                    Register Admin
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button className="btn btn-danger" onClick={logoutMethod}>
          Logout
        </button>
      </div>
    </nav>
  );
}
