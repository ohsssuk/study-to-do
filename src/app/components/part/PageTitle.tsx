import { ReactNode } from "react";

import styles from "./styles.module.css";

interface PageTitleProps {
  title: ReactNode;
  descroption?: ReactNode;
}
export default function PageTitle({ title, descroption }: PageTitleProps) {
  return (
    <h1 className={styles["page-title"]}>
      <p>{title}</p>
      {descroption && <p>{descroption}</p>}
    </h1>
  );
}
