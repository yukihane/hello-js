import { VisibilityFilters, SetVisibilityFilterAction } from "../actions";

export type VisibilityFilterState = VisibilityFilters;

const visibilityFilter = (
  state: VisibilityFilterState = VisibilityFilters.SHOW_ALL,
  action: SetVisibilityFilterAction
): VisibilityFilterState => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
