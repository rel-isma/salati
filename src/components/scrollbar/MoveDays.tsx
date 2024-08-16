// import { PropsWithChildren } from "react";
import styles from "./MoveDays.module.css";

// RealFeel

const MoveDays = ({ hijti, gregorian }) => {
  return (
    <div className={styles.MoveDays}>
      <h3>{hijti}</h3>
      <p>{gregorian}</p>
    </div>
  );
};

export default MoveDays;
