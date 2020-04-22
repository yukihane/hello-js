import { connect } from "react-redux";
import { TaskItem } from "../types";
import { RootState } from "../reducers";
import TaskListComponent from "./TaskListComponent";

interface StateProps {
  tasks: TaskItem[];
}

const mapStateToProps = (state: RootState): StateProps => ({
  tasks: state.task.tasks,
});

export interface ReducedProps extends StateProps {}
export default connect(mapStateToProps)(TaskListComponent);
