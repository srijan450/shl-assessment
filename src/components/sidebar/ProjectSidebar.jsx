import React, { useContext, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { AppData } from "../../context";
const ProjectSidebar = () => {
  const {
    PROJECTSIDEBAR: {
      show,
      title,
      technologies,
      frontend,
      backend,
      databases,
      infrastructre,
    },
    setPROJECTSIDEBAR,
  } = useContext(AppData);

  useEffect(() => {
    if (show) document.body.classList.add("loackscroll");
    return () => {
      document.body.classList.remove("loackscroll");
    };
  }, [show]);

  const closeSidebar = function (e) {
    e.stopPropagation();
    const selectedClick = e.target.getAttribute("aria-label");
    if (selectedClick === "sidebar-backshadow") {
      setPROJECTSIDEBAR((prev) => ({ ...prev, show: false }));
    }
  };
  const closeBtnHandler = (e) => {
    setPROJECTSIDEBAR((prev) => ({ ...prev, show: false }));
  };

  return (
    <section
      className={styles.bodyLock}
      style={{ visibility: show ? "visible" : "hidden" }}
      onClick={closeSidebar}
      aria-label="sidebar-backshadow"
    >
      <aside
        className={`${styles.sidebar} ${styles.projectSidebar} ${
          show ? styles.showProjectSidebar : ""
        }`}
      >
        <div className={styles.header}>
          <button
            className={styles.closeBtn}
            onClick={closeBtnHandler}
            aria-label="sidebar-close-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h2>{title ? title : "Project"}</h2>
        </div>
        <div className={styles.items}>
          <i className="fa-regular fa-closed-captioning"></i> Title
          <p>{title ? title : "Project"}</p>
        </div>

        <div className={styles.items}>
          <i className="fa-solid fa-star"></i> Project Technologies
          <p>{technologies ? technologies : "-"}</p>
        </div>

        <div className={styles.items}>
          <i className="fa-solid fa-code"></i> Technical Skillset Frontend
          <p>{frontend ? frontend : "-"}</p>
        </div>

        <div className={styles.items}>
          <i className="fa-solid fa-cloud"></i> Technical Skillset Backend
          <p>{backend ? backend : "-"}</p>
        </div>

        <div className={styles.items}>
          <i className="fa-solid fa-database"></i> Technical Skillset Databases
          <p>{databases ? databases : "-"}</p>
        </div>

        <div className={styles.items}>
          <i className="fa-solid fa-server"></i> Technical Skillset
          Infrastructure
          <p>{infrastructre ? infrastructre : "-"}</p>
        </div>
      </aside>
    </section>
  );
};

export default ProjectSidebar;
