// import { PropsWithChildren } from "react";
import styles from "./ContainerNowTime.module.css";
import TimeNow from "./TimeNow";

const ContainerNowTime = ({ nowPrayer, timeRemaining }) => {
  return (
    <div className={styles.ContainerNowTime}>
      <TimeNow
        title="Now time is"
        prayer={nowPrayer.prayerName}
        timeprayer={nowPrayer.prayerTime}
        remainingPrayer={timeRemaining.remainingNow}
      />
    </div>
  );
};

export default ContainerNowTime;
