import styles from "./LocationItem.module.css";
import { useNavigate } from "react-router-dom";

const LocationItem = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.about_location_item_conatiner}>
      <div className={styles.about_location_item_image}>
        <img src={props.image} alt="" />
      </div>
      <p className={styles.about_location_item_title}>{props.title}</p>
      <button
        className={styles.about_location_item_button}
        onClick={() => {
          navigate("/locations");
        }}
      >
        SEE LOCATION
      </button>
    </div>
  );
};

export default LocationItem;
