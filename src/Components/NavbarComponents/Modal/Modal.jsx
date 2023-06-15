import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setService } from "../../../store/actions/ServiceAction";

const Modal = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={styles.navbar_modal_container}>
      <ul className={`${styles.navbar_links_container}`}>
        <li
          onClick={() => {
            dispatch(setService("AboutUs"));
            navigate("/about");
            props.onHideModal();
          }}
        >
          Our Company
        </li>
        <li
          onClick={() => {
            dispatch(setService("Location"));
            navigate("/locations");
            props.onHideModal();
          }}
        >
          Locations
        </li>
        <li
          onClick={() => {
            dispatch(setService("Contact"));
            navigate("/contact");
            props.onHideModal();
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Modal;
