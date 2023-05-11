import { useState, Fragment } from "react";
import styles from "./ContactHeader.module.css";
import iconError from "../../../assets/contact/desktop/icon-error.svg";

const ContactHeader = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const nameChangeHandler = (event) => {
    setNameError(false);
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmailError(false);
    setEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setPhoneError(false);
    setPhone(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessageError(false);
    setMessage(event.target.value);
  };

  const nameBlurHandler = (event) => {
    if (name.trim().length === 0) {
      setNameError(true);
    }
  };
  const emailBlurHandler = (event) => {
    if (email.trim().length === 0) {
      setEmailError(true);
    }
  };
  const phoneBlurHandler = (event) => {
    if (phone.trim().length === 0) {
      setPhoneError(true);
    }
  };
  const messageBlurHandler = (event) => {
    if (message.trim().length === 0) {
      setMessageError(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0) {
      setNameError(true);
    }
    if (email.trim().length === 0) {
      setEmailError(true);
    }
    if (phone.trim().length === 0) {
      setPhoneError(true);
    }
    if (message.trim().length === 0) {
      setMessageError(true);
    }
  };

  return (
    <div className={styles.contact_header_container}>
      <div className={styles.contact_header_content_container}>
        <p className={styles.contact_header_content_title}>{props.title}</p>
        <p className={styles.contact_header_content_description}>
          {props.description}
        </p>
      </div>
      <div className={styles.contact_header_image}>
        <form>
          <div className={styles.contact_header_input_container}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            <div className={styles.contact_header_input_error_container}>
              {nameError && (
                <Fragment>
                  <p>Can't be empty</p>
                  <img src={iconError} alt="" />
                </Fragment>
              )}
            </div>
          </div>
          <div className={styles.contact_header_input_container}>
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            <div className={styles.contact_header_input_error_container}>
              {emailError && (
                <Fragment>
                  <p>Can't be empty</p>
                  <img src={iconError} alt="" />
                </Fragment>
              )}
            </div>
          </div>
          <div className={styles.contact_header_input_container}>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
            />
            <div className={styles.contact_header_input_error_container}>
              {phoneError && (
                <Fragment>
                  <p>Can't be empty</p>
                  <img src={iconError} alt="" />
                </Fragment>
              )}
            </div>
          </div>
          <div className={styles.contact_header_input_container}>
            <textarea
              type="text"
              placeholder="Your Message"
              rows={6}
              value={message}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            ></textarea>
            <div className={styles.contact_header_input_error_container1}>
              {messageError && (
                <Fragment>
                  <p>Can't be empty</p>
                  <img src={iconError} alt="" />
                </Fragment>
              )}
            </div>
          </div>
          <div className={styles.contact_header_submit_button_container}>
            <div
              className={styles.contact_header_submit_button}
              onClick={submitHandler}
            >
              SUBMIT
            </div>
          </div>
          {/* <button>SUBMIT</button> */}
        </form>
      </div>
    </div>
  );
};

export default ContactHeader;
