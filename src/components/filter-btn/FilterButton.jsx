import React, { useContext, useEffect, useState } from "react";
import styles from "./FilterButton.module.css";
import { AppData } from "../../context";
const FilterButton = ({ technologyName, technologyType }) => {
  const { FILTER, setFILTER, setFILTERED, ALLPROJECTS } = useContext(AppData);
  const [state, setstate] = useState(false);

  useEffect(() => {
    setstate(FILTER.some((item) => item.technologyName === technologyName));
  }, [FILTER]);

  const handleClick = () => {
    if (state) {
      {
        setFILTER((prev) =>
          prev.filter((item) => item.technologyName !== technologyName)
        );

        setFILTERED(() => {
          let resetFILTERED = ALLPROJECTS;
          for (let ind = 0; ind < FILTER.length; ind++) {
            if (FILTER[ind].technologyName !== technologyName)
              resetFILTERED = resetFILTERED.filter((item) =>
                item[technologyType]?.includes(FILTER[ind].technologyName)
              );
          }
          return resetFILTERED;
        });
      }
    } else {
      setFILTER((prev) => [...prev, { technologyName, technologyType }]);
      setFILTERED((prev) => {
        return prev.filter((items) =>
          items[technologyType]?.includes(technologyName)
        );
      });
    }
  };

  return (
    <button
      className={`${styles.btn} ${state ? styles.active : ""}`}
      onClick={handleClick}
    >
      {technologyName}
    </button>
  );
};

export default FilterButton;
