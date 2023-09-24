import React, { useContext } from "react";
import styles from "./FilterText.module.css";
import { AppData } from "../../context";

const FilterText = ({ technologyName, technologyType, id }) => {
  const { setFILTER, setFILTERED, ALLPROJECTS, FILTER } = useContext(AppData);
  const removeFilter = () => {
    setFILTER((prev) => {
      return prev.filter((item, key) => key !== id);
    });

    setFILTERED(() => {
      let resetFILTERED = ALLPROJECTS;
      for (let ind = 0; ind < FILTER.length; ind++) {
        if (FILTER[ind].technologyName !== technologyName)
          resetFILTERED = resetFILTERED.filter((item) => {
            return item[technologyType]?.includes(FILTER[ind].technologyName);
          });
      }
      return resetFILTERED;
    });
  };
  return (
    <div className={`${styles.btn} ${styles.filterText}`}>
      {technologyName ? technologyName : "Filtered Text"}
      <span
        className={`${styles.filterIcon} ${styles.removeFilterIcon}`}
        onClick={removeFilter}
      >
        <i className="fa-solid fa-xmark"></i>
      </span>{" "}
    </div>
  );
};

export default FilterText;
