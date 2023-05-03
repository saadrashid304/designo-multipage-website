import styles from "./AboutUsDescription.module.css";

const AboutUsDescription = (props) => {
  return (
    <div
      className={`${styles.about_description_container} ${
        props.image !== "image_left" && styles.about_description_right
      }`}
    >
      <div
        className={`${styles.about_description_image} ${
          props.image !== "image_left" && styles.about_description_image_left
        }`}
      ></div>
      <div className={styles.about_description_content_container}>
        <p className={styles.about_description_content_title}>{props.title}</p>
        <p className={styles.about_description_content_description}>
          {props.para1}
        </p>
        <p className={styles.about_description_content_description}>
          {props.para2}
        </p>
      </div>
    </div>
  );
};

export default AboutUsDescription;
