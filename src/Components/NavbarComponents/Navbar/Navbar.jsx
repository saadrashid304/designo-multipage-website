import styles from "./Navbar.module.css";
import NavbarLinks from "../NavbarLinks/NavbarLinks";

const Navbar = (props) => {
  return (
    <div className={styles.navbar_container}>
      <img src={props.logo} alt="DESIGNO" />
      <NavbarLinks light={props.light} />
    </div>
  );
};

export default Navbar;
