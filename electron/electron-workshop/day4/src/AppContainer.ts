import { connect } from "react-redux";
import AppComponent from "./AppComponent";
import { Dispatch } from "redux";
import { startTasksLoading } from "./actions";

interface DispatchProps {
  loadTasks: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loadTasks: () => dispatch(startTasksLoading(dispatch)),
});

export interface ReducedProps extends DispatchProps {}
export default connect(null, mapDispatchToProps)(AppComponent);
