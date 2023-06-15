import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setService } from "../store/actions/ServiceAction";

import BackgroundDiv from "../Components/UIComponents/BackgroundDiv/BackgroundDiv";
import LocationList from "../Components/AboutUsComponents/LocationList/LocationList";
import ContactHeader from "../Components/ContactComponents/ContactHeader/ContactHeader";

const Contact = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(setService("Contact"));
  }, [dispach]);

  return (
    <Fragment>
      <BackgroundDiv invert="Contact" />
      <ContactHeader
        title="Contact Us"
        description="Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line."
      />
      <LocationList />
    </Fragment>
  );
};

export default Contact;
