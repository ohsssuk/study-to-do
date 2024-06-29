import React from "react";
import styles from "./ui-styles.module.css";

interface CommonInputProps {
  type?: string;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CommonInput({
  type = "text",
  value,
  placeholder,
  onChange,
}: CommonInputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
    />
  );
}
