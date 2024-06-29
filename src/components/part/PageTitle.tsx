import { ReactNode } from "react";

import styles from "./part-styles.module.css";

interface PageTitleProps {
  title: ReactNode;
  subTitle?: ReactNode;
}
export default function PageTitle({ title, subTitle }: PageTitleProps) {
  return (
    <section>
      <header>
        <h1 className={styles["page-title"]}>
          <p>{title}</p>
          {subTitle && <p>{subTitle}</p>}
        </h1>
      </header>
    </section>
  );
}
