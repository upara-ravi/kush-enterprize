import App from "../App";
import ParallaxComponent from "../component/test";
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
  {
    path: "/Test",
    element: <ParallaxComponent/>,
  }
];
export default routes;
