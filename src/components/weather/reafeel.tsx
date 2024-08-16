// import { PropsWithChildren } from "react";
import styles from "./RealFeel.module.css";

interface RealFeelProps {
  realFell: number;
}

const RealFeel: React.FC<RealFeelProps> = ({ realFell }) => {
  return (
    <div className={styles.RealFeelApp}>
      <p>RealFeel®</p>
      <h3>{realFell}°</h3>
    </div>
  );
};

export default RealFeel;
