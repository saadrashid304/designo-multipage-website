import styles from "./NavbarLight.module.css";
import NavbarLinksLight from "../NavbarLinksLight/NavbarLinksLight";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setService } from "../../../store/actions/ServiceAction";

const NavbarLight = (props) => {
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
      <NavbarLinksLight light={props.light} />
    </div>
  );
};

export default NavbarLight;
