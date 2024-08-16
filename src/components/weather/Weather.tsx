// import { PropsWithChildren } from "react";
import searchIcon from "../../assets/weather1.svg";
import styles from "./Weather.module.css";

// RealFeel

const Weather = ({ weather, iconUrl }) => {
  return (
    <div className={styles.WeatherApp}>
      <img src={iconUrl} alt="icon"></img>
      <h3>{weather}</h3>
      <span>°C</span>
    </div>
  );
};

export default Weather;
