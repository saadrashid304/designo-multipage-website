import { Fragment, useEffect } from "react";
// import styles from "./App.module.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/NavbarComponents/Navbar/Navbar";

import Home from "./Webpages/Home";
import WebDesign from "./Webpages/WebDesign";
import AppDesign from "./Webpages/AppDesign";
import GraphicDesign from "./Webpages/GraphicDesign";
import AboutUs from "./Webpages/AboutUs";
import Location from "./Webpages/Location";
import Contact from "./Webpages/Contact";

import AskToContact from "./Components/FooterComponents/AskToContact/AskToContact";
import Footer from "./Components/FooterComponents/Footer/Footer";

import logoDark from "./assets/shared/desktop/logo-dark.png";
import mobileImg from "./assets/home/desktop/image-hero-phone.png";
import { useSelector } from "react-redux";

const App = () => {
  const { pathname } = useLocation();
  const service = useSelector((state) => state.service);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <Navbar logo={logoDark} light={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webDesign" element={<WebDesign />} />
        <Route path="/appDesign" element={<AppDesign />} />
        <Route path="/graphicDesign" element={<GraphicDesign />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {service !== "Contact" && (
        <AskToContact
          title="Let's talk about your project"
          description="With over Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."
          image={mobileImg}
        />
      )}
      <Footer />
    </Fragment>
  );
};

export default App;
