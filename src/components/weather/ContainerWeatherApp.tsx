// import { PropsWithChildren } from "react";
import styles from "./ContainerWeatherApp.module.css";
import City from "../City/City";
import Time from "./Time";
import RealFeel from "./reafeel";
import Weather from "./Weather";
// import Humidity from "./Humidity";

const ContainerWeatherApp = ({ weatherData, city, time, iconUrl }) => {
  return (
    <div className={styles.ContainerWeather}>
      <div className={styles.city}>
        <City city={city} country="morocco" />
      </div>
      <div className={styles.time}>
        <Time time={time} />
      </div>
      <div className={styles.weatherside}>
        <Weather weather={weatherData.temperature} iconUrl={iconUrl} />
        <hr />
        <div className={styles.infoWeather}>
          <RealFeel realFell={weatherData.realFeel} />
          {/* <Humidity Humidity="44" /> */}
        </div>
      </div>
    </div>
  );
};

export default ContainerWeatherApp;
