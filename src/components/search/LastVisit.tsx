import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import styles from "./LastVisit.module.css";

const LastVisit = forwardRef(({ onCityChange }, ref) => {
  const [lastVisits, setLastVisits] = useState([]);
  const [hoveredCity, setHoveredCity] = useState(null);

  useEffect(() => {
    const storedCities = localStorage.getItem("cities");
    if (storedCities) {
      setLastVisits(JSON.parse(storedCities));
    }
  }, []);

  const addCity = useCallback((city: stringi) => {
    setLastVisits((prevVisits) => {
      const filteredCities = prevVisits.filter((c) => c !== city);
      const newCities = [city, ...filteredCities].slice(0, 4);
      localStorage.setItem("cities", JSON.stringify(newCities));
      return newCities;
    });
  }, []);

  useImperativeHandle(ref, () => ({ addCity }), [addCity]);

  const handleCityClick = (city) => {
    if (onCityChange) {
      onCityChange(city);
    }
  };

  const handleCityMouseEnter = (city) => {
    setHoveredCity(city);
  };

  const handleCityMouseLeave = () => {
    setHoveredCity(null);
  };

  return (
    <div className={styles.lastVisits}>
      <h3 className={styles.lastvisit}>Last visit</h3>
      <div className={styles.visiting}>
        {lastVisits.length > 0 ? (
          lastVisits.map((city, index) => (
            <div
              key={index}
              className={`${styles.lastCity} ${
                index === 0 && hoveredCity === null ? styles.firstcity : ""
              }  ${index >= 2 ? styles.hideOnSmallScreen : ""}`}
              onMouseEnter={() => handleCityMouseEnter(city)}
              onMouseLeave={handleCityMouseLeave}
              onClick={() => handleCityClick(city)}
            >
              {city}
            </div>
          ))
        ) : (
          <p>No recent visits</p>
        )}
      </div>
    </div>
  );
});

export default LastVisit;
