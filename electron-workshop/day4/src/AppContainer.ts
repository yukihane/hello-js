import { connect } from "react-redux";
import { TaskItem } from "./types";
import { RootState } from "./reducers";
import AppComponent from "./AppComponent";
import { Dispatch } from "redux";
import { showTasks } from "./actions";

interface StateProps {
  tasks: TaskItem[];
}

const mapStateToProps = (state: RootState): StateProps => ({
  tasks: state.task.tasks,
});

interface DispatchProps {
  showTasks: (tasks: TaskItem[]) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  showTasks: (tasks: TaskItem[]) => dispatch(showTasks(tasks)),
});

export interface ReducedProps extends StateProps, DispatchProps {}
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
