import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setService } from "../store/actions/ServiceAction";

import LocationList from "../Components/LocationComponents/LocationList/LocationList";

const Location = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(setService("Location"));
  }, []);

  return <LocationList />;
};

export default Location;
