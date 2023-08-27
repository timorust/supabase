import { ReactElement } from "react";

export interface IProps {
  integer: number;
  component: React.FC;
  children: ReactElement;
}
