import React, { useContext, useEffect } from "react";
import styles from "./Loader.module.css";
import { AppData } from "../../context";

const Loader = ({ value }) => {
  const { LOADER } = useContext(AppData);

  useEffect(() => {
    if (LOADER) document.body.classList.add("loackscroll");
    return () => {
      document.body.classList.remove("loackscroll");
    };
  }, []);

  return (
    <div
      className={styles.loader}
      style={{ display: LOADER ? "block" : "none" }}
    >
      <div />
      <span className={styles.text}>Loading...</span>
    </div>
  );
};

export default Loader;
