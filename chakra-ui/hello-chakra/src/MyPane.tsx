import { FC } from "react";

type Props = {
  text: string;
};

export const MyPane: FC<Props> = ({ text }) => <div>{text}</div>;
