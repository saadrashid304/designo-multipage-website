import styles from "./HomepageLinks.module.css";
import HomepageLinkItem from "../HomePageLinkItem/HomepageLinkItem";
import Card from "../../UIComponents/Card/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setService } from "../../../store/actions/ServiceAction";

const HomepageLinks = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card className={styles.homepage_link_container}>
      <HomepageLinkItem
        image="web"
        title="Web Design"
        onClick={() => {
          dispatch(setService("Web"));
          navigate("/webDesign");
        }}
      />
      <div> 
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
      </div>
    </Card>
  );
};

export default HomepageLinks;
