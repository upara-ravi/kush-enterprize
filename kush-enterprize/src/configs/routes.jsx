import App from "../App";
import Login from "../Pages/Auth/Login";

const routes = [
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
export default routes;
