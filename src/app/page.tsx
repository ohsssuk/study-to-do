import PageTitle from "../components/part/PageTitle";
import PageSection from "../components/part/PageContent";
import WeekWeather from "@/containers/WeekWeather";
import Todo from "@/containers/Todo";

import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      <main id={styles.this_week}>
        <PageTitle
          title={"THIS WEEK"}
          subTitle={"신나는 일주일을 계획합시다!"}
        />
        <PageSection title={"이번주 날씨"} marginTop={40}>
          <WeekWeather />
        </PageSection>

        <PageSection title={"이번주 To-Do"} marginTop={40}>
          <Todo />
        </PageSection>
      </main>
    </>
  );
}
