import styles from "./DesignContentItem.module.css";

const DesignContentItem = (props) => {
  return (
    <div className={styles.design_content_item_container}>
      <img src={props.image} alt="" />
      <div className={styles.design_content_item_content_container}>
        <p className={styles.design_content_item_content_title}>
          {props.title}
        </p>
        <p className={styles.design_content_item_content_description}>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default DesignContentItem;
