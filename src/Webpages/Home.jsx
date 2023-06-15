import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setService } from "../store/actions/ServiceAction";

import BackgroundDiv from "../Components/UIComponents/BackgroundDiv/BackgroundDiv";
import HomepageFront from "../Components/HomepageComponents/HomepageFront/HomepageFront";
import HomepageLinks from "../Components/HomepageComponents/HomepageLinks/HomepageLinks";
import HomepageFeatures from "../Components/HomepageComponents/HomepageFeatures/HomepageFeatures";

import mobileImg from "../assets/home/desktop/image-hero-phone.png";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setService("Home"));
  }, [dispatch]);

  return (
    <Fragment>
      <BackgroundDiv invert={false} />
      <BackgroundDiv invert={true} />
      <HomepageFront
        title="Award-winning custom designs and digital branding solutions"
        description="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."
        image={mobileImg}
      />
      <HomepageLinks />
      <HomepageFeatures />
    </Fragment>
  );
};

export default Home;
