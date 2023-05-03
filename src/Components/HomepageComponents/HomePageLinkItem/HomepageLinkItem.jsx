import styles from "./HomepageLinkItem.module.css";
import Card from "../../UIComponents/Card/Card";
import rightArrow from "../../../assets/shared/desktop/icon-right-arrow.svg";

const HomepageLinkItem = (props) => {
  return (
    <Card
      className={`${styles.homepage_link_item_container} ${
        props.image === "web" && styles.image_web
      } ${props.image === "web_small" && styles.image_web_small} ${
        props.image === "app" && styles.image_app
      } ${props.image === "graphic" && styles.image_graphic}`}
      onClick={props.onClick}
    >
      <p className={styles.homepage_link_item_title}>{props.title}</p>
      <p className={styles.homepage_link_item_view}>
        View Projects{" "}
        <span>
          <img src={rightArrow} alt="" />
        </span>
      </p>
    </Card>
  );
};

export default HomepageLinkItem;
