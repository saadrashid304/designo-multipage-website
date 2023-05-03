import styles from "./AboutUsHeader.module.css";

const AboutUsHeader = (props) => {
  return (
    <div className={styles.about_header_container}>
      <div className={styles.about_header_content_container}>
        <p className={styles.about_header_content_title}>{props.title}</p>
        <p className={styles.about_header_content_description}>
          {props.description}
        </p>
      </div>
      <div className={styles.about_header_image}></div>
    </div>
  );
};

export default AboutUsHeader;
