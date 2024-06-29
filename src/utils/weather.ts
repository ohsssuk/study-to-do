import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCloud,
  faCloudShowersHeavy,
  faCloudSun,
  faQuestion,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
}

export function getWeatherIcon(weather: string): IconDefinition {
  switch (weather.toLowerCase()) {
    case "맑음":
      return faSun;
    case "구름 많음":
      return faCloud;
    case "흐림":
      return faCloudSun;
    case "비":
      return faCloudShowersHeavy;
    default:
      return faQuestion;
  }
}

export function filterThisWeek(data: WeatherData[]): WeatherData[] {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const mondayOfThisWeek = new Date(today);
  mondayOfThisWeek.setDate(
    mondayOfThisWeek.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
  );

  const sundayOfThisWeek = new Date(mondayOfThisWeek);
  sundayOfThisWeek.setDate(mondayOfThisWeek.getDate() + 7);

  const thisWeekData = data.filter((day) => {
    const date = new Date(day.date);
    return date >= mondayOfThisWeek && date <= sundayOfThisWeek;
  });

  return thisWeekData;
}

export function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
