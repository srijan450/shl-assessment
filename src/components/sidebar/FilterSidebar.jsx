import React, { useContext, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { AppData } from "../../context";
import {
  backend,
  databases,
  frontend,
  infrastructure,
  technologies,
} from "./quickfilters";
import FilterButton from "../filter-btn/FilterButton";

const FilterSidebar = () => {
  const { FILTERSIDEBAR, setFILTERSIDEBAR } = useContext(AppData);

  useEffect(() => {
    if (FILTERSIDEBAR) document.body.classList.add("loackscroll");
    return () => {
      document.body.classList.remove("loackscroll");
    };
  }, [FILTERSIDEBAR]);

  const closeSidebar = function (e) {
    e.stopPropagation();
    const selectedClick = e.target.getAttribute("aria-label");
    if (selectedClick === "sidebar-backshadow") {
      setFILTERSIDEBAR(false);
    }
  };

  const closeBtnHandler = () => {
    setFILTERSIDEBAR(false);
  };

  const showFilters = (techArray, technologyType) => {
    return techArray.map((item, key) => {
      return (
        <FilterButton technologyName={item} technologyType={technologyType} />
      );
    });
  };
  return (
    <section
      className={styles.bodyLock}
      style={{ visibility: FILTERSIDEBAR ? "visible" : "hidden" }}
      onClick={closeSidebar}
      aria-label="sidebar-backshadow"
    >
      <aside
        className={`${styles.sidebar} ${styles.filterSidebar} ${
          FILTERSIDEBAR ? styles.showFilterSidebar : ""
        }`}
      >
        <div className={`${styles.header} ${styles.header2}`}>
          <button
            className={styles.closeBtn}
            onClick={closeBtnHandler}
            aria-label="sidebar-close-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h2>Quick Filters</h2>
        </div>

        <div className={styles.allFilterWrapper}>
          <div className={styles.items}>
            <i className="fa-solid fa-star"></i> Filter Bassed On Technologies
            <div>{showFilters(technologies, "technologies")}</div>
          </div>

          <div className={styles.items}>
            <i className="fa-solid fa-code"></i> Filter Bassed On Frontend Skill
            <div>{showFilters(frontend, "frontend")}</div>
          </div>

          <div className={styles.items}>
            <i className="fa-solid fa-cloud"></i> Filter Bassed On Backend Skill
            <div>{showFilters(backend, "backend")}</div>
          </div>

          <div className={styles.items}>
            <i className="fa-solid fa-database"></i> Filter Bassed On Databases
            <div>{showFilters(databases, "databases")}</div>
          </div>

          <div className={styles.items}>
            <i className="fa-solid fa-server"></i> Filter Bassed On
            Infrastructure
            <div>{showFilters(infrastructure, "infrastructre")}</div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default FilterSidebar;
