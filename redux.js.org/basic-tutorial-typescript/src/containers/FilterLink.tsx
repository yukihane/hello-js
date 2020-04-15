import { connect } from "react-redux";
import { setVisibilityFilter, VisibilityFilters } from "../actions";
import Link from "../components/Link";
import { RootState } from "../reducers";
import { Dispatch } from "redux";

interface FilterLinkProps {
  filter: VisibilityFilters;
}

interface StateProps {
  active: boolean;
}

const mapStateToProps = (
  state: RootState,
  ownProps: FilterLinkProps
): StateProps => ({
  active: ownProps.filter === state.visibilityFilter,
});

interface DispatchProps {
  onClick: () => void;
}

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: FilterLinkProps
): DispatchProps => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export interface ReducedProps extends StateProps, DispatchProps {}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
