import styles from "./HomepageFront.module.css";
import Card from "../../UIComponents/Card/Card";

const HomepageFront = (props) => {
  return (
    <Card className={styles.homepage_front_container}>
      <div className={styles.homepage_front_content_container}>
        <p className={styles.homepage_front_content_title}>{props.title}</p>
        <p className={styles.homepage_front_content_description}>
          {props.description}
        </p>
        <button type="button" className={styles.homepage_front_content_button}>
          Learn More
        </button>
      </div>
      <img className={styles.mobile_image} src={props.image} alt="" />
    </Card>
  );
};

export default HomepageFront;
