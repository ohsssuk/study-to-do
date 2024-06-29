import React, { useState } from "react";
import styles from "./ui-styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";

interface CommonCheckboxProps {
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
}
export default function CommonCheckbox({
  isChecked = false,
  onChange,
}: CommonCheckboxProps) {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={styles.input}
      />
      <FontAwesomeIcon
        icon={isChecked ? faCheckSquare : faSquare}
        className={styles.icon}
      />
    </label>
  );
}
