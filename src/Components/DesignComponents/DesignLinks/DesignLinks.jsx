import { Fragment } from "react";
import styles from "./DesignLinks.module.css";
import HomepageLinkItem from "../../HomepageComponents/HomePageLinkItem/HomepageLinkItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setService } from "../../../store/actions/ServiceAction";

const DesignLinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service);

  return (
    <div className={styles.design_link_container}>
      {service === "Web" && (
        <Fragment>
          <HomepageLinkItem
            image="app"
            title="App Design"
            onClick={() => {
              dispatch(setService("App"));
              navigate("/appDesign");
            }}
          />
          <HomepageLinkItem
            image="graphic"
            title="Graphic Design"
            onClick={() => {
              dispatch(setService("Graphic"));
              navigate("/graphicDesign");
            }}
          />
        </Fragment>
      )}
      {service === "App" && (
        <Fragment>
          <HomepageLinkItem
            image="web_small"
            title="Web Design"
            onClick={() => {
              dispatch(setService("Web"));
              navigate("/webDesign");
            }}
          />
          <HomepageLinkItem
            image="graphic"
            title="Graphic Design"
            onClick={() => {
              dispatch(setService("Graphic"));
              navigate("/graphicDesign");
            }}
          />
        </Fragment>
      )}
      {service === "Graphic" && (
        <Fragment>
          <HomepageLinkItem
            image="app"
            title="App Design"
            onClick={() => {
              dispatch(setService("App"));
              navigate("/appDesign");
            }}
          />
          <HomepageLinkItem
            image="web_small"
            title="Web Design"
            onClick={() => {
              dispatch(setService("Web"));
              navigate("/webDesign");
            }}
          />
        </Fragment>
      )}
    </div>
  );
};

export default DesignLinks;
