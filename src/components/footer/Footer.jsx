import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} body`}>
      <i className="fa-regular fa-copyright"></i>&nbsp; Copyright Srijan Shankar
      Dubey, {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
