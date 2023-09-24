import React from "react";
import styles from "./ProjectCard.module.css";
import { useContext } from "react";
import { AppData } from "../../context";
const ProjectCard = ({
  title,
  technologies,
  frontend,
  backend,
  databases,
  infrastructre,
}) => {
  const { setPROJECTSIDEBAR } = useContext(AppData);
  const loadDataInSideBar = () => {
    setPROJECTSIDEBAR({
      show: true,
      title,
      technologies,
      frontend,
      backend,
      databases,
      infrastructre,
    });
  };
  return (
    <div className={styles.card} onClick={loadDataInSideBar}>
      <div className={styles.cardItems}>
        Title
        <h3>{title}</h3>
      </div>

      <div className={styles.cardItems}>
        Project Technologies
        <p>{technologies}</p>
      </div>

      <div className={styles.cardItems}>
        Technical Skillset Frontend
        <p>{frontend}</p>
      </div>

      <div className={styles.cardItems}>
        Technical Skillset Backend
        <p>{backend}</p>
      </div>

      <div className={styles.cardItems}>
        Technical Skillset Databases
        <p>{databases ? databases : "-"}</p>
      </div>

      <div className={styles.cardItems}>
        Technical Skillset Infrastructure
        <p>{infrastructre ? infrastructre : "-"}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
