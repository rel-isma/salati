// import { PropsWithChildren } from "react";
import styles from "./ContainerNextTime.module.css";
import TimeNow from "./TimeNow";
interface ContainerNowTimeProps {
  nextPrayer: {
    prayerName: string;
    prayerTime: string;
  };
  timeRemaining: {
    remainingNext: string;
  };
}

const ContainerNextTime: React.FC<ContainerNowTimeProps> = ({
  nextPrayer,
  timeRemaining,
}) => {
  return (
    <div className={styles.ContainerNextTime}>
      <TimeNow
        title="Next prayer is"
        prayer={nextPrayer.prayerName}
        timePrayer={nextPrayer.prayerTime}
        remainingPrayer={timeRemaining.remainingNext}
      />
    </div>
  );
};

export default ContainerNextTime;
