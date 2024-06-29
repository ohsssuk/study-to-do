import { ReactNode } from "react";

import styles from "./styles.module.css";

interface PageContentProps {
  title: ReactNode;
  children: ReactNode;
}
export default function PageContent({ title, children }: PageContentProps) {
  return (
    <section className={styles["page-section"]}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
