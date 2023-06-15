import { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Footer.module.css";
import NavbarLight from "../../NavbarComponents/NavbarLight/NavbarLight";

import logoLight from "../../../assets/shared/desktop/logo-light.png";

import facebook from "../../../assets/shared/desktop/icon-facebook.svg";
import youtube from "../../../assets/shared/desktop/icon-youtube.svg";
import twitter from "../../../assets/shared/desktop/icon-twitter.svg";
import pinterest from "../../../assets/shared/desktop/icon-pinterest.svg";
import instagram from "../../../assets/shared/desktop/icon-instagram.svg";

import facebookS from "../../../assets/shared/desktop/facebook.svg";
import youtubeS from "../../../assets/shared/desktop/youtube.svg";
import twitterS from "../../../assets/shared/desktop/twitter.svg";
import pinterestS from "../../../assets/shared/desktop/pinterest.svg";
import instagramS from "../../../assets/shared/desktop/instagram.svg";

const Footer = (props) => {
  const [hover, setHover] = useState(null);
  const service = useSelector((state) => state.service);

  const onFMouseOver = () => {
    setHover("F");
  };

  const onYMouseOver = () => {
    setHover("Y");
  };

  const onTMouseOver = () => {
    setHover("T");
  };

  const onPMouseOver = () => {
    setHover("P");
  };

  const onIMouseOver = () => {
    setHover("I");
  };

  const onMouseLeave = () => {
    setHover(null);
  };

  return (
    <div
      className={`${styles.footer_container} ${
        service === "Contact" && styles.footer_contact_space
      }`}
    >
      <div className={styles.footer_navbar_container}>
        <NavbarLight logo={logoLight} light={true} />
      </div>
      <div className={styles.footer_information}>
        <div className={styles.footer_address}>
          <p>Designo Central Office</p>
          <p className={styles.footer_address_normal}>3886 Wellington Street</p>
          <p className={styles.footer_address_normal}>
            Toronto, Ontario M9C 3J5
          </p>
        </div>
        <div className={styles.footer_contact}>
          <p>Contact Us (Central Office)</p>
          <p>P: +1 253-863-8967</p>
          <p>M: contact@designo.co</p>
        </div>
        <div className={styles.footer_icon_container}>
          <img
            src={hover === "F" ? facebookS : facebook}
            alt=""
            onMouseOver={onFMouseOver}
            onMouseLeave={onMouseLeave}
          />
          <img
            src={hover === "Y" ? youtubeS : youtube}
            alt=""
            onMouseOver={onYMouseOver}
            onMouseLeave={onMouseLeave}
          />
          <img
            src={hover === "T" ? twitterS : twitter}
            alt=""
            onMouseOver={onTMouseOver}
            onMouseLeave={onMouseLeave}
          />
          <img
            src={hover === "P" ? pinterestS : pinterest}
            alt=""
            onMouseOver={onPMouseOver}
            onMouseLeave={onMouseLeave}
          />
          <img
            src={hover === "I" ? instagramS : instagram}
            alt=""
            onMouseOver={onIMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
