import React, { FC } from "react";
import styles from "./MyButton.module.scss";

export type Props = { label: string };

export const MyButton: FC<Props> = ({ label }) => {
  return (
    <button type="button" className={styles.MyButton}>
      {label}
    </button>
  );
};
