// import { PropsWithChildren } from "react";
import styles from "./ContainerNowTime.module.css";
import TimeNow from "./TimeNow";

interface ContainerNowTimeProps {
  nowPrayer: {
    prayerName: string;
    prayerTime: string;
  };
  timeRemaining: {
    remainingNow: string;
  };
}

const ContainerNowTime: React.FC<ContainerNowTimeProps> = ({
  nowPrayer,
  timeRemaining,
}) => {
  return (
    <div className={styles.ContainerNowTime}>
      <TimeNow
        title="Now time is"
        prayer={nowPrayer.prayerName}
        timePrayer={nowPrayer.prayerTime}
        remainingPrayer={timeRemaining.remainingNow}
      />
    </div>
  );
};

export default ContainerNowTime;
