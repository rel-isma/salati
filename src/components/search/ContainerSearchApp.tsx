import styles from "./ContainerSearchApp.module.css";
import SearchApp from "./SearchApp";
import LastVisit from "./LastVisit";
import { useRef } from "react";

const ContainerSearchApp = ({ onCityChange }) => {
  const lastVisitRef = useRef(null);

  const handleCityChange = (city) => {
    onCityChange(city);
    if (lastVisitRef.current) {
      lastVisitRef.current.addCity(city);
    }
  };

  return (
    <div className={styles.ContainerSearch}>
      <SearchApp onCityChange={handleCityChange} />
      <LastVisit ref={lastVisitRef} onCityChange={handleCityChange} />
    </div>
  );
};

export default ContainerSearchApp;
