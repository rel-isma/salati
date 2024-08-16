import styles from "./Weather.module.css";

interface Weather {
  weather: number;
  iconUrl: string;
}

const Weather: React.FC<Weather> = ({ weather, iconUrl }) => {
  return (
    <div className={styles.WeatherApp}>
      <img src={iconUrl} alt="icon"></img>
      <h3>{weather}</h3>
      <span>°C</span>
    </div>
  );
};

export default Weather;
