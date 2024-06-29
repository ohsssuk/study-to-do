import { ReactNode } from "react";
import styles from "./ui-styles.module.css";

interface CommonBtnProps {
  onClick?: () => void;
  isFull?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
}
export default function CommonBtn({
  onClick,
  isFull = true,
  isDisabled = false,
  children,
}: CommonBtnProps) {
  return (
    <button
      className={`${styles.btn} ${isFull ? styles.full : ""}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
