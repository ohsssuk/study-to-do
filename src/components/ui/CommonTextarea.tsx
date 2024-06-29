import styles from "./ui-styles.module.css";

interface CommonTextareaProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  minHeight?: number;
  resize?: "both" | "horizontal" | "vertical" | "none";
}
export default function CommonTextarea({
  value,
  onChange,
  placeholder,
  minHeight = 140,
  resize = "vertical",
}: CommonTextareaProps) {
  return (
    <textarea
      style={{ resize, minHeight }}
      className={styles.textarea}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
