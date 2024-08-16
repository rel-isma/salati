// import { PropsWithChildren } from "react";
import styles from "./Humidity.module.css";

// RealFeel

const Humidity = ({ Humidity }) => {
  return (
    <div className={styles.HumidityApp}>
      <p>Humidity</p>
      <h5>{Humidity}%</h5>
    </div>
  );
};

export default Humidity;
