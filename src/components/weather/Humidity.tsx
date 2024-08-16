// import { PropsWithChildren } from "react";
import React from "react";
import styles from "./Humidity.module.css";

// RealFeel
interface HumidityProps {
  Humidity: string;
}

const Humidity: React.FC<HumidityProps> = ({ Humidity }) => {
  return (
    <div className={styles.HumidityApp}>
      <p>Humidity</p>
      <h5>{Humidity}%</h5>
    </div>
  );
};

export default Humidity;
