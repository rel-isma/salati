// import { PropsWithChildren } from "react";
import styles from "./ContainerNextTime.module.css";
import TimeNow from "./TimeNow";

const ContainerNextTime = ({ nextPrayer, timeRemaining }) => {
  return (
    <div className={styles.ContainerNextTime}>
      <TimeNow
        title="Next prayer is"
        prayer={nextPrayer.prayerName}
        timeprayer={nextPrayer.prayerTime}
        remainingPrayer={timeRemaining.remainingNext}
      />
    </div>
  );
};

export default ContainerNextTime;
