import { useCallback, useState } from "react";
import styles from "./Dir.module.css";
import moment from "moment";

const DirLeft = ({ dir, onHandleChangeDayClick, datePrayerGregorian }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const getNextDayDate = useCallback(() => {
    return moment(datePrayerGregorian, "DD-MM-YYYY")
      .add(1, "days")
      .format("DD-MM-YYYY");
  }, [onHandleChangeDayClick]);
  const nextDay = getNextDayDate();

  const handleChangeDayClick = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    onHandleChangeDayClick(nextDay);
  }, [nextDay, onHandleChangeDayClick]);

  return (
    <button
      className={`${styles.Dir} ${isAnimating ? styles.animateClick : ""}`}
      onClick={handleChangeDayClick}
    >
      <img src={dir} alt="Arrow Left" />
    </button>
  );
};

export default DirLeft;
