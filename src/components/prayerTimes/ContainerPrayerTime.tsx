// import { PropsWithChildren } from "react";
import styles from "./ContainerPrayerTime.module.css";
import PrayerTimeMount from "./PrayerTimeMount";
import PrayerTimeToDay from "./PrayerTimeToDay";

// PrayerTimeMount
// PrayerTimeToDay
const ContainerPrayerTime = ({ prayerTime, prayerNow, prayerMount }) => {
  return (
    <div className={styles.ContainerPrayerTime}>
      <PrayerTimeMount prayerMount={prayerMount} />
      <PrayerTimeToDay prayerNow={prayerNow} prayerTime={prayerTime} />
    </div>
  );
};

export default ContainerPrayerTime;
