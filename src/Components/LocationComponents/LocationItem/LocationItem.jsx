import styles from "./LocationItem.module.css";

const LocationItem = (props) => {
  return (
    <div
      className={`${styles.location_item_container} ${
        props.title === "Australia" && styles.location_item_reverse
      }`}
    >
      <div className={styles.location_item_content_container}>
        <div className={styles.location_item_content_sub_container}>
          <p className={styles.location_item_title}>{props.title}</p>
          <div className={styles.location_item_address_main_container}>
            <div className={styles.location_item_address_container}>
              <p className={styles.location_item_bold}>{props.line1}</p>
              <p>{props.line2}</p>
              <p>{props.line3}</p>
            </div>
            <div className={styles.location_item_address_container}>
              <p className={styles.location_item_bold}>Contact</p>
              <p>{props.line4}</p>
              <p>{props.line5}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.location_item_image} ${
          props.title === "Canada" && styles.location_item_image_canada
        } ${props.title === "Australia" && styles.location_item_image_aus} ${
          props.title === "United Kingdom" && styles.location_item_image_uk
        }`}
      ></div>
    </div>
  );
};

export default LocationItem;
