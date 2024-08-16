// import { PropsWithChildren } from "react";
import styles from "./PrayerTimeToDay.module.css";
import PrayerTime from "./PrayerTime";
import Line from "./Line";

import Fajr from "../../assets/Fajr.svg";
import Sunirse from "../../assets/Sunrise.svg";
import Dhuhr from "../../assets/Dhuhr.svg";
import Asr from "../../assets/Asr.svg";
import Maghrib from "../../assets/Marghib.svg";
import Isha from "../../assets/Isha.svg";

// PrayerTimes
// Line
const PrayerTimeToDay = ({ prayerTime, prayerNow }) => {
  return (
    <div className={styles.prayertimetoday}>
      <PrayerTime
        prayerNow={prayerNow}
        iconPryaer={Fajr}
        namePrayer="Fajr"
        timeprayer={prayerTime.Fajr}
      />
      <Line />
      <PrayerTime
        prayerNow={prayerNow}
        iconPryaer={Sunirse}
        namePrayer="Sunrise"
        timeprayer={prayerTime.Sunrise}
      />
      <Line />
      <PrayerTime
        prayerNow={prayerNow}
        iconPryaer={Dhuhr}
        namePrayer="Dhuhr"
        timeprayer={prayerTime.Dhuhr}
      />
      <Line />
      <PrayerTime
        prayerNow={prayerNow}
        iconPryaer={Asr}
        namePrayer="Asr"
        timeprayer={prayerTime.Asr}
      />
      <Line />
      <PrayerTime
        prayerNow={prayerNow}
        iconPryaer={Maghrib}
        namePrayer="Maghrib"
        timeprayer={prayerTime.Maghrib}
      />
      <Line />
      <PrayerTime
        prayerNow={prayerNow}
        iconPryaer={Isha}
        namePrayer="Isha"
        timeprayer={prayerTime.Isha}
      />
    </div>
  );
};

export default PrayerTimeToDay;
