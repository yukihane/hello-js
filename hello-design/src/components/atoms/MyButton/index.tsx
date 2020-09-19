import React, { FC } from "react";
// import styles from "./MyButton.module.css";

export type Props = { label: string };

export const MyButton: FC<Props> = ({ label }) => {
  return <button type="button">{label}</button>;
};
