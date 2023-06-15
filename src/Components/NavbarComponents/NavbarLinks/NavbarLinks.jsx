import { Fragment, useState } from "react";
import styles from "./NavbarLinks.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setService } from "../../../store/actions/ServiceAction";
import menu from "../../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../../assets/shared/mobile/icon-close.svg";
import Modal from "../Modal/Modal";

const NavbarLinks = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayMenu, setDisplayMenu] = useState(false);

  const hideDisplayMenuHandler = () => {
    setDisplayMenu(false);
  };

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
      <img
        src={displayMenu ? close : menu}
        alt=""
        onClick={() => setDisplayMenu((prevState) => !prevState)}
        className={styles.navbar_menu_icon}
      />
      {displayMenu && (
        <div className={styles.backdrop} onClick={hideDisplayMenuHandler} />
      )}
      {displayMenu && <Modal onHideModal={hideDisplayMenuHandler} />}
    </Fragment>
  );
};

export default NavbarLinks;
