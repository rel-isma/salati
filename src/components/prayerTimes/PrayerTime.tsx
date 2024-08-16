import React from "react";
import styles from "./PrayerTime.module.css";

interface PrayerTimeProps {
  prayerNow: string;
  iconPryaer: string;
  namePrayer: string;
  timeprayer: string;
}

const PrayerTime: React.FC<PrayerTimeProps> = ({
  prayerNow,
  iconPryaer,
  namePrayer,
  timeprayer,
}) => {
  const isCurrentPrayer = namePrayer === prayerNow;

  return (
    <div
      className={`${styles.Prayeryime} ${
        isCurrentPrayer ? styles.prayerNow : ""
      }`}
    >
      <div className={styles.nameAndIcon}>
        <img src={iconPryaer} alt={`${namePrayer} icon`} />
        <h3>{namePrayer}</h3>
      </div>
      <h3>
        {timeprayer} <span>am</span>
      </h3>
    </div>
  );
};

export default PrayerTime;
