import styles from "./Navbar.module.css";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setService } from "../../../store/actions/ServiceAction";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={styles.navbar_container}>
      <img
        src={props.logo}
        alt="DESIGNO"
        onClick={() => {
          dispatch(setService("Home"));
          navigate("/");
        }}
      />
      <NavbarLinks light={props.light} />
    </div>
  );
};

export default Navbar;
