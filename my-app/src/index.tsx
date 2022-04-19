import ReactDOM from "react-dom/client";
import Login from "./authorizationScreens/LoginScreen";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Login />);
