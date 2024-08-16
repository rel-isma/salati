// import { PropsWithChildren } from "react";
import React from "react";
import styles from "./MoveDays.module.css";

// RealFeel
interface MoveDaysProps {
  hijti: string;
  gregorian: string;
}

const MoveDays: React.FC<MoveDaysProps> = ({ hijti, gregorian }) => {
  return (
    <div className={styles.MoveDays}>
      <h3>{hijti}</h3>
      <p>{gregorian}</p>
    </div>
  );
};

export default MoveDays;
