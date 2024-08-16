// import { PropsWithChildren } from "react";
import styles from "./City.module.css";

interface CityProps {
  city: string;
  country: string;
}
const City: React.FC<CityProps> = ({ city, country }) => {
  const truncatedCity: string =
    city.length > 15 ? city.slice(0, 15) + ".." : city;
  return (
    <div className={styles.CityApp}>
      <h2>{truncatedCity}</h2>
      <p>{country}</p>
    </div>
  );
};

export default City;
