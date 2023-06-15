import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setService } from "../store/actions/ServiceAction";

import BackgroundDiv from "../Components/UIComponents/BackgroundDiv/BackgroundDiv";
import DesignHeader from "../Components/DesignComponents/DesignHeader/DesignHeader";
import DesignContentList from "../Components/DesignComponents/DesignContentList/DesignContentList";
import DesignLinks from "../Components/DesignComponents/DesignLinks/DesignLinks";

const WebDesign = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setService("Web"));
  }, [dispatch]);

  return (
    <Fragment>
      <BackgroundDiv invert="Web" />
      <DesignHeader
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <DesignContentList />
      <DesignLinks />
    </Fragment>
  );
};

export default WebDesign;
