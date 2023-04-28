import styles from "./HomepageFeaturesItem.module.css";

const HomepageFeaturesItem = (props) => {
  return (
    <div className={styles.homepage_features_item_conatiner}>
      <div className={styles.homepage_features_item_image}>
        <img src={props.image} alt="" />
      </div>
      <p className={styles.homepage_features_item_title}>{props.title}</p>
      <p className={styles.homepage_features_item_description}>
        {props.description}
      </p>
    </div>
  );
};

export default HomepageFeaturesItem;
