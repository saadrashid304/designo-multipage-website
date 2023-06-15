import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setService } from "../store/actions/ServiceAction";

import LocationList from "../Components/LocationComponents/LocationList/LocationList";

const Location = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setService("Location"));
  }, [dispatch]);

  return <LocationList />;
};

export default Location;
