import { Fragment } from "react";
import styles from "./App.module.css";
import Navbar from "./Components/NavbarComponents/Navbar/Navbar";
import BackgroundDiv from "./Components/UIComponents/BackgroundDiv/BackgroundDiv";
import HomepageFront from "./Components/HomepageComponents/HomepageFront/HomepageFront";
import HomepageLinks from "./Components/HomepageComponents/HomepageLinks/HomepageLinks";
import HomepageFeatures from "./Components/HomepageComponents/HomepageFeatures/HomepageFeatures";
import AskToContact from "./Components/FooterComponents/AskToContact/AskToContact";
import Footer from "./Components/FooterComponents/Footer/Footer";

import logoDark from "./assets/shared/desktop/logo-dark.png";
import mobileImg from "./assets/home/desktop/image-hero-phone.png";

const App = () => {
  return (
    <Fragment>
      <Navbar logo={logoDark} light={false} />
      <BackgroundDiv invert={false} />
      <BackgroundDiv invert={true} />
      <HomepageFront
        title="Award-winning custom designs and digital branding solutions"
        description="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."
        image={mobileImg}
      />
      <HomepageLinks />
      <HomepageFeatures />
      <AskToContact
        title="Let's talk about your project"
        description="With over Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."
        image={mobileImg}
      />
      <Footer />
    </Fragment>
  );
};

export default App;
