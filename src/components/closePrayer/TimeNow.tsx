import styles from "./TimeNow.module.css";

interface TimeNowProps {
  title: string;
  prayer: string;
  timePrayer: string;
  remainingPrayer: string;
}

const TimeNow: React.FC<TimeNowProps> = ({
  title,
  prayer,
  timePrayer,
  remainingPrayer,
}) => {
  return (
    <div className={styles.TimeNow}>
      <p>{title}</p>
      <h2>{prayer}</h2>
      <h3>
        {timePrayer} <span>adhan</span>
      </h3>
      <div className={styles.remainingPrayer}>{remainingPrayer}</div>
    </div>
  );
};

export default TimeNow;
