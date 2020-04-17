export interface StateProps {
  count?: number;
}

export interface DispatchProps {
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
}

export interface ReducedProps extends StateProps, DispatchProps {}
