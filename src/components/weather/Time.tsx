// import { PropsWithChildren } from "react";
import styles from "./Time.module.css";

const Time = ({ time }) => {
  return <div className={styles.TimeApp}>{time}</div>;
};

export default Time;
