import { useState } from "react";
import { Link } from "react-router-dom";
import ShairInput from "../components/ShairInput";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
} from "../helpers/InputValidation";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const onRegistrationPress = () => {
    window.open("../homeScreens/ProfileScreen");
  };

  const isValidForSubmission = () => {
    return (
      isValidEmail(email) &&
      isValidPassword(password) &&
      passwordsMatch() &&
      isValidName(firstName) &&
      isValidName(lastName)
    );
  };

  const passwordsMatch = () => {
    return password === confPassword;
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
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-white-50 mb-5">
                    Fill out the form below to register for ShairLog
                  </p>

                  <ShairInput
                    label="First Name"
                    type={"text"}
                    validateFunction={() => isValidName(firstName)}
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <ShairInput
                    label="Last Name"
                    type={"text"}
                    validateFunction={() => isValidName(firstName)}
                    onChange={(e) => setLastName(e.target.value)}
                  />

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

                  <ShairInput
                    label="Confirm Password"
                    type={"password"}
                    validateFunction={() => passwordsMatch()}
                    onChange={(e) => setConfPassword(e.target.value)}
                    validationErrorMessage={"Passwords must match"}
                  />
                  <Link to="/homeScreens/HomeScreen">
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      disabled={!isValidForSubmission()}
                    >
                      Register
                    </button>
                  </Link>
                </div>

                <div>
                  <p className="mb-0">
                    Already have an account?{" "}
                    <Link to="/authenticationScreens/LoginScreen">
                      Sign in.
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
