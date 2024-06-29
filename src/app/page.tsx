import PageTitle from "./components/part/PageTitle";
import PageSection from "./components/part/PageContent";

export default function Home() {
  return (
    <main>
      <PageTitle
        title={"THIS WEEK"}
        descroption={"신나는 일주일을 계획합시다!"}
      />

      <PageSection title={"이번주 날씨"}>
        <></>
      </PageSection>

      <PageSection title={"이번주 To-Do"}>
        <></>
      </PageSection>
    </main>
  );
}
