import styles from "./DesignHeader.module.css";

const DesignHeader = (props) => {
  return (
    <div
      className={`${styles.design_header_container} ${
        props.title === "Web Design" && styles.design_header_container_web
      } ${props.title === "App Design" && styles.design_header_container_app} ${
        props.title === "Graphic Design" &&
        styles.design_header_container_graphic
      }`}
    >
      <p className={styles.design_header_title}>{props.title}</p>
      <p className={styles.design_header_description}>{props.description}</p>
    </div>
  );
};

export default DesignHeader;
