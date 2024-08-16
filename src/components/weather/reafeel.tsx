// import { PropsWithChildren } from "react";
import styles from "./RealFeel.module.css";

// RealFeel

const RealFeel = ({ realFell }) => {
  return (
    <div className={styles.RealFeelApp}>
      <p>RealFeel®</p>
      <h3>{realFell}°</h3>
    </div>
  );
};

export default RealFeel;
