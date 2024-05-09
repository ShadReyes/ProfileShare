import { useState } from "react";
import { Link } from "react-router-dom";
import { isValidEmail, isValidPassword } from "../helpers/InputValidation";
import ShairInput from "../components/ShairInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidForSubmission = () => {
    return isValidEmail(email) && isValidPassword(password);
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

                  <ShairInput
                    label="Email"
                    validateFunction={() => isValidEmail(email)}
                    onChange={(e) => setEmail(e.target.value)}
                    validationErrorMessage={"Email not valid"}
                  />

                  <ShairInput
                    label="Password"
                    type={"password"}
                    validateFunction={() => isValidPassword(password)}
                    onChange={(e) => setPassword(e.target.value)}
                    validationErrorMessage={
                      "Password must be at least 8 characters"
                    }
                  />

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <Link to="/homeScreens/HomeScreen">
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      disabled={!isValidForSubmission()}
                    >
                      Login
                    </button>
                  </Link>
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
