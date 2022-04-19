import { useState } from "react";
import { Link } from "react-router-dom";
import CSS from "csstype";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
} from "../helpers/InputValidation";
import ShairInput from "../components/ShairInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [validForSubmition, setValidForSubmition] = useState(false);

  const isValidForSubmition = () => {
    return validEmail && validPassword;
  };

  const onLoginPress = () => {
    window.open("../homeScreens/ProfileScreen");
  };

  const inputStyles: CSS.Properties = {
    borderColor: validEmail ? "black" : "red",
    borderWidth: "medium",
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  {/* <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      style={inputStyles}
                      onBlur={() => setValidEmail(isValidEmail(email))}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="typeEmailX">
                      Email
                    </label>
                  </div> */}
                  <ShairInput
                    label="Email yes"
                    validateFunction={() => isValidEmail(email)}
                    onChange={(e) => setEmail(e.target.value)}
                    validationErrorMessage={"Email not valid"}
                  />

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      style={inputStyles}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => setValidPassword(isValidPassword(password))}
                    />
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={onLoginPress}
                    disabled={!isValidForSubmition()}
                  >
                    Login
                  </button>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/authenticationScreens/RegistrationScreen">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
