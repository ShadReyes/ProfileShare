import ReactDOM from "react-dom/client";
import Login from "./authorizationScreens/LoginScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Registration from "./authorizationScreens/RegistrationScreen";
import HomeScreen from "./homeScreens/HomeScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/authenticationScreens/LoginScreen" element={<Login />} />

      <Route
        path="/authenticationScreens/RegistrationScreen"
        element={<Registration />}
      />

      <Route path="/homeScreens/HomeScreen" element={<HomeScreen />} />
    </Routes>
  </BrowserRouter>
);
