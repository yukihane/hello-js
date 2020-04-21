import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TaskItem } from "./types";
import { RootState } from "./reducers";
import AppComponent from "./AppComponent";
import { toggleCompleteTask, deleteTask } from "./actions";

interface StateProps {
  tasks: TaskItem[];
}

const mapStateToProps = (state: RootState): StateProps => ({
  tasks: state.task.tasks,
});

interface DispatchProps {
  toggleCompleted: (id: string) => void;
  removeTask: (id: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  toggleCompleted: (id: string) => dispatch(toggleCompleteTask(id)),
  removeTask: (id: string) => dispatch(deleteTask(id)),
});

export interface ReducedProps extends StateProps, DispatchProps {}
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
