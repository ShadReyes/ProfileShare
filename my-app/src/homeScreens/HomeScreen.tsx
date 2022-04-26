export default function HomeScreen() {
  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar-expand-lg navbar navbar-dark bg-dark sticky-top">
        <a className="navbar-brand text-light" href="https://www.google.com">
          Navbar w/ text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-light" href="https://www.google.com">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="https://www.google.com">
                Features
              </a>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link text-light" href="https://www.google.com">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="d-flex flex-column flex-grow-1" style={{}}>
        <div
          className="card bg-dark text-white"
          style={{
            borderRadius: "1rem",
            width: "50%",
            height: "50%",
            margin: "auto",
          }}
        >
          <div className="card-body p-5 text-center">Hello</div>
        </div>
      </div>
    </div>
  );
}
