import styles from "./ui-styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faTimes } from "@fortawesome/free-solid-svg-icons";

interface CommonBtnProps {
  onClick?: () => void;
  isDisabled?: boolean;
  icon?: IconDefinition;
  text?: string;
}
export default function IconBtn({
  onClick,
  isDisabled = false,
  icon = faTimes,
  text = "삭제",
}: CommonBtnProps) {
  return (
    <button
      className={styles["icon-btn"]}
      disabled={isDisabled}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
      <span style={{ fontSize: 0 }}>{text}</span>
    </button>
  );
}
