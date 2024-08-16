// import { PropsWithChildren } from "react";
import React from "react";
import styles from "./Time.module.css";
interface timeProps {
  time: string;
}
const Time: React.FC<timeProps> = ({ time }) => {
  return <div className={styles.TimeApp}>{time}</div>;
};

export default Time;
