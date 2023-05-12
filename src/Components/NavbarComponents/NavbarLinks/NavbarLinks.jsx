import { Fragment } from "react";
import styles from "./NavbarLinks.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setService } from "../../../store/actions/ServiceAction";
import menu from "../../../assets/shared/mobile/icon-hamburger.svg";

const NavbarLinks = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Fragment>
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
      <img src={menu} alt="" className={styles.navbar_menu_icon} />
    </Fragment>
  );
};

export default NavbarLinks;
