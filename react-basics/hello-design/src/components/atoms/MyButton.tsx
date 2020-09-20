import React, { FC } from "react";
import styles from "./MyButton.module.scss";

export type Props = { label: string; disabled: boolean };

export const MyButton: FC<Props> = ({ label, disabled }) => {
  const style = disabled ? styles.MyButton_disabled : styles.MyButton;
  return (
    <button type="button" className={style} disabled={disabled}>
      {label}
    </button>
  );
};
