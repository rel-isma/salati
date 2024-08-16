import styles from "./ContainerSearchApp.module.css";
import SearchApp from "./SearchApp";
import LastVisit from "./LastVisit";
import { useRef } from "react";

interface ContainerSearchAppProps {
  onCityChange: (city: string) => void;
}

interface LastVisitRef {
  addCity: (city: string) => void;
}

const ContainerSearchApp: React.FC<ContainerSearchAppProps> = ({
  onCityChange,
}) => {
  const lastVisitRef = useRef<LastVisitRef>(null);

  const handleCityChange = (city: string) => {
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
