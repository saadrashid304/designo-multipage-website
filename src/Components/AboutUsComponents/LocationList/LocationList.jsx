import styles from "./LocationList.module.css";
import LocationItem from "../LocationItem/LocationItem";

import canada from "../../../assets/shared/desktop/illustration-canada.svg";
import australia from "../../../assets/shared/desktop/illustration-australia.svg";
import uk from "../../../assets/shared/desktop/illustration-united-kingdom.svg";

const LocationList = () => {
  return (
    <div className={styles.about_location_container}>
      <LocationItem image={canada} title="CANADA" />
      <LocationItem image={australia} title="AUSTRALIA" />
      <LocationItem image={uk} title="UNITED KINGDOM" />
    </div>
  );
};

export default LocationList;
