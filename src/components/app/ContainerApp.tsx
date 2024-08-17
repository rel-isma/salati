import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import moment from "moment";
import styles from "./ContainerApp.module.css";
import ContainerSearchApp from "../search/ContainerSearchApp";
import ContainerWeatherApp from "../weather/ContainerWeatherApp";
import ContainerNowTime from "../closePrayer/ContainerNowTime";
import ContainerNextTime from "../closePrayer/ContainerNextTime";
import ContainerDate from "../scrollbar/ContainerDate";
import ContainerPrayerTime from "../prayerTimes/ContainerPrayerTime";
import Quran from "../floor/Quran";
import ErrorComponent from "../ErrorComponent";
import LoadingSpinner from "../LoadingSpinner";

interface TimingsData {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface PrayerTime {
  prayerName: string;
  prayerTime: string;
}

interface TimeRemaining {
  remainingNow: string;
  remainingNext: string;
}

interface WeatherData {
  realFeel: number;
  temperature: number;
}

interface PrayerMount {
  monthNumber: string;
  monthName: string;
  city: string;
  year: string;
}

const ContainerApp = () => {
  const [timingsData, setTimingsData] = useState<TimingsData>({
    Fajr: "05:10",
    Sunrise: "06:47",
    Dhuhr: "13:38",
    Asr: "17:15",
    Maghrib: "20:24",
    Isha: "21:44",
  });
  const [hijriDate, setHijriDate] = useState<string>("");
  const [gregorianDate, setGregorianDate] = useState<string>("");

  const [nowPrayerTime, setNowPrayerTime] = useState<PrayerTime>({
    prayerName: "Fajr",
    prayerTime: "00:00",
  });

  const [nextPrayerTime, setNextPrayerTime] = useState<PrayerTime>({
    prayerName: "Fajr",
    prayerTime: "00:00",
  });

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    remainingNow: "- 00:00:00",
    remainingNext: "- 00:00:00",
  });

  const [city, setCity] = useState<string>("Khouribga");
  const country = "MA";
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData>({
    realFeel: 0,
    temperature: 0,
  });
  const [datePrayerGregorian, setDatePrayerGregorian] = useState<string>("");
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const PRAYER_NAMES: string[] = [
    "Fajr",
    "Sunrise",
    "Dhuhr",
    "Asr",
    "Maghrib",
    "Isha",
  ];
  const [time, setTime] = useState<string>("");
  const apiKey = "0f8ba4e5cfe11e0c3e6fef5bd749686c";
  const countryW = "Morocco";
  const [iconUrl, setIconUrl] = useState<string>("");
  const [prayerMount, setPrayerMount] = useState<PrayerMount>({
    monthNumber: "",
    monthName: "",
    city: "",
    year: "",
  });

  const fetchWeatherData = useCallback(async () => {
    setError(null);
    setIsNotFound(false);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryW}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
      setIconUrl(iconUrl);

      setWeatherData({
        realFeel: Math.round(data.main.feels_like),
        temperature: Math.round(data.main.temp),
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 404) {
          setError("City not found. Please enter a correct city name.");
          setIsNotFound(true);
        } else {
          setError("Failed to fetch prayer data. Please try again later.");
        }
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
      setIsLoading(true);
    } finally {
      setIsLoading(false);
    }
  }, [city, countryW]);

  const updateCurrentTime = useCallback(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    setTime(`${hours}:${minutes}`);
  }, []);

  useEffect(() => {
    fetchWeatherData();
    updateCurrentTime();
    const timeInterval = setInterval(updateCurrentTime, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [fetchWeatherData, updateCurrentTime]);

  const calculatePrayerTimes = useCallback((timings: TimingsData) => {
    const now = moment();

    const filteredTimings = Object.entries(timings).filter(([prayerName]) =>
      PRAYER_NAMES.includes(prayerName)
    );

    const prayerEntries = filteredTimings.map(([prayerName, time]) => ({
      prayerName,
      prayerTime: moment(time, "HH:mm"),
    }));

    let nextPrayerIndex = prayerEntries.findIndex(({ prayerTime }) =>
      now.isBefore(prayerTime)
    );

    if (nextPrayerIndex === -1) {
      nextPrayerIndex = prayerEntries.length - 1;
    }

    const nextPrayer = prayerEntries[nextPrayerIndex];
    const nextNextPrayerIndex = (nextPrayerIndex + 1) % prayerEntries.length;
    const nextNextPrayer = prayerEntries[nextNextPrayerIndex];

    setNowPrayerTime({
      prayerName: nextPrayer.prayerName,
      prayerTime: timings[nextPrayer.prayerName as keyof TimingsData],
    });

    setNextPrayerTime({
      prayerName: nextNextPrayer.prayerName,
      prayerTime: timings[nextNextPrayer.prayerName as keyof TimingsData],
    });
  }, []);

  const fetchPrayerData = useCallback(
    async (Day: string) => {
      setError(null);
      setIsNotFound(false);
      const url = `https://api.aladhan.com/v1/timingsByCity/${Day}?city=${city}&country=${country}`;
      try {
        const response = await axios.get(url);
        const data = response.data;
        const timings = data.data.timings;
        setTimingsData(timings);

        // Set Hijri date
        const hijriDate = `${parseInt(data.data.date.hijri.day) + 1} ${
          data.data.date.hijri.month.en
        }, ${data.data.date.hijri.year}`;
        setHijriDate(hijriDate);

        setDatePrayerGregorian(data.data.date.gregorian.date);
        const gregorianDate = `${
          data.data.date.gregorian.weekday.en
        }, ${parseInt(data.data.date.gregorian.day)} ${
          data.data.date.gregorian.month.en
        } ${data.data.date.gregorian.year}`;
        setGregorianDate(gregorianDate);

        // set prayerMount
        setPrayerMount({
          monthNumber: data.data.date.hijri.month.number,
          monthName: data.data.date.hijri.month.en,
          city: city,
          year: data.data.date.hijri.year,
        });

        // calculatePrayerTimes(timings);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 404) {
            setError("City not found. Please enter a correct city name.");
            setIsNotFound(true);
          } else {
            setError("Failed to fetch prayer data. Please try again later.");
          }
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
        setIsLoading(true);
      } finally {
        setIsLoading(false);
      }
    },
    [city, country]
  );

  useEffect(() => {
    const currentDay = moment().format("DD-MM-YYYY");
    fetchPrayerData(currentDay);
  }, [fetchPrayerData]);

  useEffect(() => {
    if (timingsData && city) {
      calculatePrayerTimes(timingsData);
    }
  }, [timingsData, city, calculatePrayerTimes]);

  const pad = useCallback((num: number) => num.toString().padStart(2, "0"), []);

  const formatDuration = useCallback(
    (duration: moment.Duration) => {
      return ` - ${pad(duration.hours())}:${pad(duration.minutes())}:${pad(
        duration.seconds()
      )}`;
    },
    [pad]
  );

  const updateRemainingTime = useCallback(() => {
    const now = moment();
    const nowPTime = moment(nowPrayerTime.prayerTime, "HH:mm");
    const nextPTime = moment(nextPrayerTime.prayerTime, "HH:mm");

    if (nextPTime.isBefore(nowPTime)) {
      nextPTime.add(1, "days");
    }

    const nowRemaining = moment.duration(nowPTime.diff(now));
    const nextRemaining = moment.duration(nextPTime.diff(now));

    if (
      (nowRemaining.asHours() === 0 &&
        nowRemaining.asMinutes() === 0 &&
        nowRemaining.asSeconds() <= 0) ||
      (nextRemaining.asHours() === 0 &&
        nextRemaining.asMinutes() === 0 &&
        nextRemaining.asSeconds() <= 0)
    ) {
      calculatePrayerTimes(timingsData);
    }
    setTimeRemaining({
      remainingNow: formatDuration(nowRemaining),
      remainingNext: formatDuration(nextRemaining),
    });
  }, [
    nowPrayerTime.prayerTime,
    nextPrayerTime.prayerTime,
    formatDuration,
    calculatePrayerTimes,
    timingsData,
  ]);

  useEffect(() => {
    const intervalId = setInterval(updateRemainingTime, 1000);
    return () => clearInterval(intervalId);
  }, [updateRemainingTime]);

  const handleCityChange = (newCity: string) => {
    if (newCity.trim() === "") {
      return;
    }
    setCity(newCity);
    setIsNotFound(false);
    setError(null);
  };

  const handleChangeDayClick = (dateDay: string) => {
    fetchPrayerData(dateDay);
  };

  if (error) {
    return (
      <ErrorComponent
        error={error}
        isNotFound={isNotFound}
        onCityChange={handleCityChange}
      />
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchWeather}>
        <ContainerSearchApp onCityChange={handleCityChange} />
        <ContainerWeatherApp
          weatherData={weatherData}
          city={city}
          time={time}
          iconUrl={iconUrl}
        />
      </div>
      <div className={styles.timeNextSalat}>
        <ContainerNowTime
          nowPrayer={nowPrayerTime}
          timeRemaining={timeRemaining}
        />
        <ContainerNextTime
          nextPrayer={nextPrayerTime}
          timeRemaining={timeRemaining}
        />
      </div>
      <div className={styles.moveDay}>
        <ContainerDate
          datePrayerGregorian={datePrayerGregorian}
          hijri={hijriDate}
          gregorian={gregorianDate}
          onHandleChangeDayClick={handleChangeDayClick}
        />
      </div>
      <div className={styles.prayerTimes}>
        <ContainerPrayerTime
          prayerMount={prayerMount}
          prayerTime={timingsData}
          prayerNow={nowPrayerTime.prayerName}
        />
      </div>
      <div className={styles.aya}>
        <Quran />
      </div>
    </div>
  );
};

export default ContainerApp;
