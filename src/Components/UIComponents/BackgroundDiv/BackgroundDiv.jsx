import styles from "./BackgroundDiv.module.css";

const BackgroundDiv = (props) => {
  return (
    <div
      className={`${props.invert === false && styles.background_div} ${
        props.invert === true && styles.background_div_invert
      } ${
        props.invert === "Web" &&
        `${styles.background_div_web} ${styles.background_div}`
      } ${
        props.invert === "location" &&
        `${styles.background_div_location} ${styles.background_div_invert}`
      } ${props.invert === "Contact" && `${styles.background_div_contact}`}`}
    />
  );
};

export default BackgroundDiv;
