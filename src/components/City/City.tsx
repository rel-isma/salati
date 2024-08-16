// import { PropsWithChildren } from "react";
import styles from "./City.module.css";

const City = ({ city, country }) => {
  const truncatedCity = city.length > 15 ? city.slice(0, 15) + ".." : city;
  return (
    <div className={styles.CityApp}>
      <h2>{truncatedCity}</h2>
      <p>{country}</p>
    </div>
  );
};

export default City;
