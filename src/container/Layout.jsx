import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServWebsite from "../pages/ServWebsite";
import ServMobile from "../pages/ServMobile";
import ServDesign from "../pages/ServDesign";

import Preloader from "../component/preloader/Preloader";
const Home = lazy(() => import("../pages/Home"));

function Layout() {


  return (
    <Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <body>
          <Navbar />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/auth-login" exact element={<Login />} />
            <Route path="/auth-register" exact element={<Register />} />
            <Route path="/service-website" exact element={<ServWebsite />} />
            <Route path="/service-mobile" exact element={<ServMobile />} />
            <Route path="/service-design" exact element={<ServDesign />} />
          </Routes>
          <Footer />
        </body>
      </BrowserRouter>
    </Suspense>
  );
}

export default Layout;
