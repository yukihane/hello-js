import React from "react";
import { ReducedProps } from "../containers/FilterLink";

interface LinkProps extends ReducedProps {
  children: string;
}

const Link = ({ active, children, onClick }: LinkProps) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px",
    }}
  >
    {children}
  </button>
);

export default Link;
