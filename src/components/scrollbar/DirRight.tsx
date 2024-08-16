import { useCallback, useState } from "react";
import styles from "./Dir.module.css";
import moment from "moment";

interface DirRightProps {
  dir: string;
  onHandleChangeDayClick: (date: string) => void;
  datePrayerGregorian: string;
}

const DirRight: React.FC<DirRightProps> = ({
  dir,
  onHandleChangeDayClick,
  datePrayerGregorian,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const getPreviousDayDate = useCallback(() => {
    return moment(datePrayerGregorian, "DD-MM-YYYY")
      .subtract(1, "days")
      .format("DD-MM-YYYY");
  }, [datePrayerGregorian]);

  const previousDay = getPreviousDayDate();

  const handleChangeDayClick = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    onHandleChangeDayClick(previousDay);
  }, [previousDay, onHandleChangeDayClick]);

  return (
    <button
      className={`${styles.Dir} ${isAnimating ? styles.animateClick : ""}`}
      onClick={handleChangeDayClick}
    >
      <img src={dir} alt="Arrow right" />
    </button>
  );
};

export default DirRight;
