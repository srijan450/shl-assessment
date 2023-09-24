import { createContext, useContext, useState } from "react";

const AppData = createContext();

const AppProvider = ({ children }) => {
  const [LOADER, setLOADER] = useState(false);
  const [PROJECTSIDEBAR, setPROJECTSIDEBAR] = useState({
    show: false,
    title: "Project",
    technologies: "-",
    frontend: "-",
    backend: "-",
    databases: "-",
    infrastructre: "-",
  });

  const [FILTERSIDEBAR, setFILTERSIDEBAR] = useState(false);
  const [ALLPROJECTS, setALLPROJECTS] = useState([]);
  const [FILTERED, setFILTERED] = useState([]);
  const [FILTER, setFILTER] = useState([]);

  

  return (
    <AppData.Provider
      value={{
        LOADER,
        setLOADER,
        PROJECTSIDEBAR,
        setPROJECTSIDEBAR,
        FILTERED,
        setFILTERED,
        FILTER,
        setFILTER,
        FILTERSIDEBAR,
        setFILTERSIDEBAR,
        ALLPROJECTS,
        setALLPROJECTS,
      }}
    >
      {children}
    </AppData.Provider>
  );
};

export { AppData, AppProvider };
