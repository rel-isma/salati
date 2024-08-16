// import { PropsWithChildren } from "react";
import styles from "./ContainerDate.module.css";
import MoveDays from "./MoveDays";
import DirLeft from "./DirLeft";
import DirRight from "./DirRight";
import dirleftButton from "../../assets/dirleft.svg";
import DirrightButton from "../../assets/dirright.svg";

const ContainerDate = ({
  hijri,
  gregorian,
  onHandleChangeDayClick,
  datePrayerGregorian,
}) => {
  return (
    <div className={styles.ContainerDate}>
      <DirLeft
        dir={dirleftButton}
        onHandleChangeDayClick={onHandleChangeDayClick}
        datePrayerGregorian={datePrayerGregorian}
      />
      <MoveDays hijti={hijri} gregorian={gregorian} />
      <DirRight
        dir={DirrightButton}
        onHandleChangeDayClick={onHandleChangeDayClick}
        datePrayerGregorian={datePrayerGregorian}
      />
    </div>
  );
};

export default ContainerDate;
