import styles from "./LocationList.module.css";
import LocationItem from "../LocationItem/LocationItem";

const LocationList = () => {
  return (
    <div className={styles.location_list_container}>
      <LocationItem
        title="Canada"
        line1="Designo Central Office"
        line2="3886 Wellington Street"
        line3="Toronto, Ontario M9C 3J5"
        line4="P : +1 253-863-8967"
        line5="M : contact@designo.co"
      />
      <LocationItem
        title="Australia"
        line1="Designo AU Office"
        line2="19 Balonne Street"
        line3="New South Wales 2443"
        line4="P : (02) 6720 9092"
        line5="M : contact@designo.au"
      />
      <LocationItem
        title="United Kingdom"
        line1="Designo UK Office"
        line2="13 Colorado Way"
        line3="Rhyd-y-fro SA8 9GA"
        line4="P : 078 3115 1400"
        line5="M : contact@designo.uk"
      />
    </div>
  );
};

export default LocationList;
