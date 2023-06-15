import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setService } from "../store/actions/ServiceAction";

import BackgroundDiv from "../Components/UIComponents/BackgroundDiv/BackgroundDiv";
import DesignHeader from "../Components/DesignComponents/DesignHeader/DesignHeader";
import DesignContentList from "../Components/DesignComponents/DesignContentList/DesignContentList";
import DesignLinks from "../Components/DesignComponents/DesignLinks/DesignLinks";

const AppDesign = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(setService("App"));
  }, [dispach]);

  return (
    <Fragment>
      <BackgroundDiv invert="Web" />
      <DesignHeader
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <DesignContentList />
      <DesignLinks />
    </Fragment>
  );
};

export default AppDesign;
