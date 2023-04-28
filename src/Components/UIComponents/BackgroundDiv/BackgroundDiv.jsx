import styles from "./BackgroundDiv.module.css";

const BackgroundDiv = (props) => {
  return (
    <div
      className={`${props.invert === false && styles.background_div} ${
        props.invert === true && styles.background_div_invert
      }`}
    />
  );
};

export default BackgroundDiv;
