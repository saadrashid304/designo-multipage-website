import styles from "./NavbarLinks.module.css";

const NavbarLinks = (props) => {
  return (
    <ul
      className={`${styles.navbar_links_container} ${
        props.light && styles.navbar_links_container_light
      }`}
    >
      <li>Our Company</li>
      <li>Locations</li>
      <li>Contact</li>
    </ul>
  );
};

export default NavbarLinks;
