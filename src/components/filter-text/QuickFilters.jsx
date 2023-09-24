import React, { useContext } from "react";
import styles from "./FilterText.module.css";
import { AppData } from "../../context";

const QuickFilters = ({ text, type }) => {
  const { setFILTER, setFILTERED, setFILTERSIDEBAR, ALLPROJECTS } =
    useContext(AppData);
  const handleFilter = () => {
    if (type === "applyFilter") {
      setFILTERSIDEBAR(true);
    } else {
      setFILTER([]);
      setFILTERED(ALLPROJECTS);
    }
  };
  return (
    <div
      className={`${styles.btn} ${styles.quickFilters} ${
        type === "removeAllFilters" ? styles.removeAllBtn : ""
      }`}
      onClick={handleFilter}
    >
      {text ? text : "Filtered Text"}
      <span className={`${styles.filterIcon}`}>
        {type === "applyFilter" ? (
          <i className="fa-solid fa-filter"></i>
        ) : (
          <i className="fa-solid fa-filter-circle-xmark"></i>
        )}
      </span>{" "}
    </div>
  );
};

export default QuickFilters;
