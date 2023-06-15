import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setService } from "../store/actions/ServiceAction";

import BackgroundDiv from "../Components/UIComponents/BackgroundDiv/BackgroundDiv";
import AboutUsHeader from "../Components/AboutUsComponents/AboutUsHeader/AboutUsHeader";
import AboutUsDescription from "../Components/AboutUsComponents/AboutUsDescription/AboutUsDescription";
import LocationList from "../Components/AboutUsComponents/LocationList/LocationList";

const AboutUs = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(setService("AboutUs"));
  }, [dispach]);

  return (
    <Fragment>
      <BackgroundDiv invert={false} />
      <BackgroundDiv invert="location" />
      <AboutUsHeader
        title="About Us"
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
      />
      <AboutUsDescription
        image="image_left"
        title="World-class talent"
        para1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
        para2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
      />
      <LocationList />
      <AboutUsDescription
        image="image_right"
        title="The real deal"
        para1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        para2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
"
      />
    </Fragment>
  );
};

export default AboutUs;
