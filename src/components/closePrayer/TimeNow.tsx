// import { PropsWithChildren } from "react";
import styles from "./TimeNow.module.css";

// RealFeel

const TimeNow = ({ title, prayer, timeprayer, remainingPrayer }) => {
  return (
    <div className={styles.TimeNow}>
      <p>{title}</p>
      <h2>{prayer}</h2>
      <h3>
        {timeprayer} <span>adhan</span>
      </h3>
      <div className={styles.remainingPrayer}>{remainingPrayer}</div>
    </div>
  );
};

export default TimeNow;
