import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";
import { AppData } from "../../context";
import FilterText from "../../components/filter-text/FilterText";
import QuickFilters from "../../components/filter-text/QuickFilters";
import ProjectSidebar from "../../components/sidebar/ProjectSidebar";
import FilterSidebar from "../../components/sidebar/FilterSidebar";

const Home = () => {
  const {
    setLOADER,
    FILTER,
    FILTERED,
    setFILTERED,
    ALLPROJECTS,
    setALLPROJECTS,
  } = useContext(AppData);

  useEffect(() => {
    (async function () {
      setLOADER(true);
      fetch("https://shl-backend-t4se.onrender.com/get-all-projects")
        .then((res) => res.json())
        .then((rData) => {
          setALLPROJECTS(rData);
          setFILTERED(rData);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setLOADER(false);
        });
    })();
  }, []);

  return (
    <>
      <main className="body">
        <section className={styles.compHeading}>
          <h2>
            {FILTER.length
              ? `Showing ${FILTERED.length} project${
                  FILTERED.length > 1 ? "s" : ""
                } filtered by`
              : "Showing all projects"}
          </h2>
          {FILTER.map((item, key) => (
            <FilterText
              technologyName={item.technologyName}
              technologyType={item.technologyType}
              key={key}
              id={key}
            />
          ))}
        </section>
        <section className={styles.btns}>
          <QuickFilters type="applyFilter" text={"Quick Filters"} />
          {FILTER.length > 0 && (
            <QuickFilters type="removeAllFilters" text="Remove All Filters" />
          )}
        </section>

        <section className={styles.cardContainer}>
          {FILTER.length > 0 ? (
            FILTERED.length > 0 ? (
              FILTERED.map((item) => <ProjectCard {...item} key={item._id} />)
            ) : (
              <p className={styles.noProject}>
                <i className="fa-solid fa-circle-exclamation"></i> No projects
                found with applied filters ...
              </p>
            )
          ) : ALLPROJECTS.length > 0 ? (
            ALLPROJECTS.map((item) => <ProjectCard {...item} key={item._id} />)
          ) : (
            <p className={styles.noProject}>
              <i className="fa-solid fa-circle-exclamation"></i> Cannot fetch
              data from server currently, please try again later...
            </p>
          )}
        </section>
        <ProjectSidebar />
        <FilterSidebar />
      </main>
    </>
  );
};

export default Home;
