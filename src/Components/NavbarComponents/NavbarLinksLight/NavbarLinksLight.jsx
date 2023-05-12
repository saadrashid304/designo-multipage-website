import styles from "./NavbarLinksLight.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setService } from "../../../store/actions/ServiceAction";

const NavbarLinksLight = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ul
      className={`${styles.navbar_links_container} ${
        props.light && styles.navbar_links_container_light
      }`}
    >
      <li
        onClick={() => {
          dispatch(setService("AboutUs"));
          navigate("/about");
        }}
      >
        Our Company
      </li>
      <li
        onClick={() => {
          dispatch(setService("Location"));
          navigate("/locations");
        }}
      >
        Locations
      </li>
      <li
        onClick={() => {
          dispatch(setService("Contact"));
          navigate("/contact");
        }}
      >
        Contact
      </li>
    </ul>
  );
};

export default NavbarLinksLight;
