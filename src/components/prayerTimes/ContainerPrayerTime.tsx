// import { PropsWithChildren } from "react";
import styles from "./ContainerPrayerTime.module.css";
import PrayerTimeMount from "./PrayerTimeMount";
import PrayerTimeToDay from "./PrayerTimeToDay";

interface ContainerPrayerTimeProps {
  prayerTime: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  };
  prayerMount: {
    city: string;
    year: string;
    monthNumber: string;
    monthName: string;
  };
  prayerNow: string;
}

const ContainerPrayerTime: React.FC<ContainerPrayerTimeProps> = ({
  prayerTime,
  prayerNow,
  prayerMount,
}) => {
  return (
    <div className={styles.ContainerPrayerTime}>
      <PrayerTimeMount prayerMount={prayerMount} />
      <PrayerTimeToDay prayerNow={prayerNow} prayerTime={prayerTime} />
    </div>
  );
};

export default ContainerPrayerTime;
