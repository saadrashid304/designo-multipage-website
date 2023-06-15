import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setService } from "../store/actions/ServiceAction";

import BackgroundDiv from "../Components/UIComponents/BackgroundDiv/BackgroundDiv";
import DesignHeader from "../Components/DesignComponents/DesignHeader/DesignHeader";
import DesignContentList from "../Components/DesignComponents/DesignContentList/DesignContentList";
import DesignLinks from "../Components/DesignComponents/DesignLinks/DesignLinks";

const GraphicDesign = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(setService("Graphic"));
  }, [dispach]);

  return (
    <Fragment>
      <BackgroundDiv invert="Web" />
      <DesignHeader
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <DesignContentList />
      <DesignLinks />
    </Fragment>
  );
};

export default GraphicDesign;
