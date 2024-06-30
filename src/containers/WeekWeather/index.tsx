"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {
  filterThisWeek,
  formatDate,
  formatDateToYYYYMMDD,
  getWeatherIcon,
} from "@/utils/weather";
import Loading from "@/components/ui/Loading";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const itemWidth = 120;
const itemMargin = 6;

export default function WeekWeather() {
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const [todayIndex, setTodayIndex] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); //API 가정

        const response = await axios.get<WeatherData[]>(
          "/datas/weatherData.json"
        );
        const thisWeekData = filterThisWeek(response.data);

        const today = new Date();
        const todayIndex = thisWeekData.findIndex(
          (day) => day.date === formatDateToYYYYMMDD(today)
        );

        setWeather(thisWeekData);
        setTodayIndex(todayIndex);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchWeatherData();
  }, []);

  useEffect(() => {
    if (todayIndex !== -1 && listRef.current) {
      listRef.current.scrollLeft = todayIndex * (itemWidth + itemMargin);
    }
  }, [todayIndex]);

  return (
    <div id={styles.week_wheather}>
      {isLoading ? (
        <Loading />
      ) : isError || weather.length === 0 ? (
        <p>문제가 생겨 날씨 데이터를 불러오지 못했습니다.</p>
      ) : (
        <ul ref={listRef} style={{ gap: itemMargin }}>
          {weather.map((day, index) => (
            <li
              key={index}
              style={{ width: itemWidth }}
              className={index === todayIndex ? styles.today : ""}
            >
              <p>
                {formatDate(day.date)} ({day.day.charAt(0)})
              </p>
              <p>
                <FontAwesomeIcon icon={getWeatherIcon(day.weather)} />
              </p>
              <p>{day.temperature}도</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
