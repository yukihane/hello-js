import { connect } from "react-redux";
import { RootState } from "../reducers";
import LoadingComponent from "./LoadingComponent";

interface StateProps {
  shown: boolean;
}

const mapStateToProps = (state: RootState): StateProps => ({
  shown: state.toggleSpinner.shownLoading,
});

export interface ReducedProps extends StateProps {}
export default connect(mapStateToProps)(LoadingComponent);
