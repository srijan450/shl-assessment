import React, { useContext, useState } from "react";
import styles from "./header.module.css";
import companyLogo from "../../images/company-logo.png";
import { AppData } from "../../context";

const Header = () => {
  const [search, setSearch] = useState("");
  const { setLOADER, setFILTER, setFILTERED } = useContext(AppData);
  const searchHandler = (e) => {
    e.preventDefault();
    if (search !== "") {
      setLOADER(true);
      fetch("https://shl-backend-t4se.onrender.com/get-project", {
        method: "POST",
        body: JSON.stringify({ search: search }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok)
            throw new Error(`server responded with status code ${res.status}`);
          return res.json();
        })
        .then((data) => {
          const { projects } = data;
          setFILTER([{ technologyName: search }]);
          setFILTERED(projects);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setSearch("");
          setLOADER(false);
        });
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={companyLogo} alt="company-logo" />
      </div>
      <form method="POST" onSubmit={searchHandler} className={styles.search}>
        <input
          type="search"
          placeholder="enter your query..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className={`${styles.btn} ${styles.btnSearch}`}>
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </header>
  );
};

export default Header;
