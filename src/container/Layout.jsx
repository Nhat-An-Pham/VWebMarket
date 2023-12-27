import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Login from "../pages/Login";

function Layout() {
  return (
    <BrowserRouter>
      <body>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth-login" exact element={<Login />} />
        </Routes>
        <Footer />
      </body>
    </BrowserRouter>
  );
}

export default Layout;
