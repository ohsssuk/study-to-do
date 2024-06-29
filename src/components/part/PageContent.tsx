import { ReactNode } from "react";

import styles from "./part-styles.module.css";

interface PageContentProps {
  title: ReactNode;
  children: ReactNode;
  marginTop?: number;
}
export default function PageContent({
  title,
  children,
  marginTop = 40,
}: PageContentProps) {
  return (
    <section
      className={styles["page-content"]}
      style={{ marginTop: marginTop }}
    >
      <h2>{title}</h2>
      {children}
    </section>
  );
}
