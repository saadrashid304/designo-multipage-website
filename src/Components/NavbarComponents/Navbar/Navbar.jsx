import { Fragment } from "react";
import styles from "./Navbar.module.css";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setService } from "../../../store/actions/ServiceAction";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Fragment>
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
      <div className={styles.extra_space} />
    </Fragment>
  );
};

export default Navbar;
