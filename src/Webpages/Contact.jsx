import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setService } from "../store/actions/ServiceAction";

import BackgroundDiv from "../Components/UIComponents/BackgroundDiv/BackgroundDiv";
import LocationList from "../Components/AboutUsComponents/LocationList/LocationList";

const Contact = (props) => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(setService("Contact"));
  }, []);

  return (
    <Fragment>
      <BackgroundDiv invert={false} />
      <LocationList />
    </Fragment>
  );
};

export default Contact;
