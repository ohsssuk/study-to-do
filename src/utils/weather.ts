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
