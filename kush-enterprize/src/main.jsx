import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import App from "./App.jsx";
import Header from "./component/Header/header.jsx";
import "./main.css";
import Login from "./Pages/Auth/Login/index.jsx";
import routes from "./configs/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParallaxProvider>
      <Router>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </ParallaxProvider>
  </StrictMode>
);
