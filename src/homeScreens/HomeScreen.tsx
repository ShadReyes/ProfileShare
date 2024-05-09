/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";
import image from "../images/myphoto.jpeg";
import bgImage from "../images/oregon.jpeg";

export default function HomeScreen() {
  const linkStyles = {
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "red",
  };

  const linkColor = {
    color: "#24a7ff",
  };

  const socialLinks = {
    padding: "20px",
    fontSize: "30px",
    width: "50px",
    textDecoration: "none",
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="d-flex flex-column vh-100"
    >
      <nav className="navbar-expand-lg navbar navbar-dark bg-dark sticky-top">
        <a
          className="navbar-brand text-light"
          href="https://www.google.com"
          style={{ marginLeft: 20 }}
        >
          ProfileShare
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                className="nav-link"
                style={linkStyles}
                href="https://www.google.com"
              >
                <span style={linkColor}>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                style={linkStyles}
                href="https://www.google.com"
              >
                <span style={linkColor}>Features</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                style={linkStyles}
                href="https://www.google.com"
              >
                <span style={linkColor}>Pricing</span>
              </a>
            </li>
          </ul>
        </div>
        <Link to={"/homeScreens/ProfileScreen"}>
          <img
            style={{
              borderRadius: "100%",
              marginRight: 20,
            }}
            width="50"
            height={"50"}
            alt="me"
            src={image}
          />
        </Link>
      </nav>
      <div className="d-flex flex-column flex-grow-1" style={{}}>
        <div
          className="card bg-dark text-white flex-row"
          style={{
            borderRadius: "1rem",
            width: "50%",
            height: "50%",
            margin: "auto",
            boxShadow:
              "2 2 5 #E6E6E6, 0px 0px 0px #E6E6E6, 0px 0px 0px #E6E6E6",
          }}
        >
          <div
            style={{
              flex: 1,
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              style={{
                borderRadius: "1rem",
                width: "60%",
              }}
              alt="me"
              src={image}
            />
          </div>
          <div
            style={{
              flex: 1,
              margin: "auto",
            }}
          >
            <div>
              <h2>Shadrac Reyes</h2>
              <h5>Software Engineer 2</h5>
              <br />
              <h5>[Company]</h5>
              <h5>[Phone Number]</h5>
              <h5>[Email Address]</h5>
            </div>
          </div>
          <div
            style={{
              flex: 1 / 4,
              margin: "auto",
            }}
          >
            <a
              style={socialLinks}
              href="https://www.facebook.com/shadrac.reyes"
              className="fa fa-facebook"
              target={"_blank"}
              rel="noreferrer"
            />
            <br />
            <a
              style={socialLinks}
              href="https://twitter.com/shadrac_reyes"
              className="fa fa-twitter"
              target={"_blank"}
              rel="noreferrer"
            />
            <br />
            <a
              style={socialLinks}
              href="https://www.instagram.com/shadrac.reyes/"
              className="fa fa-instagram"
              target={"_blank"}
              rel="noreferrer"
            />
            <br />
            <a
              style={socialLinks}
              href="https://www.linkedin.com/in/shadracreyes/"
              className="fa fa-linkedin"
              target={"_blank"}
              rel="noreferrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
