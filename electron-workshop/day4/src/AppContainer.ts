import { connect } from "react-redux";
import { TaskItem } from "./types";
import AppComponent from "./AppComponent";
import { Dispatch } from "redux";
import { showTasks } from "./actions";

interface DispatchProps {
  showTasks: (tasks: TaskItem[]) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  showTasks: (tasks: TaskItem[]) => dispatch(showTasks(tasks)),
});

export interface ReducedProps extends DispatchProps {}
export default connect(null, mapDispatchToProps)(AppComponent);
