import { Dispatch } from "redux";
import { connect } from "react-redux";
import { toggleCompleteTask, deleteTask } from "../actions";
import TaskRowComponent from "./TaskRowComponent";

interface DispatchProps {
  toggleCompleted: (id: string) => void;
  removeTask: (id: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  toggleCompleted: (id: string) => dispatch(toggleCompleteTask(id)),
  removeTask: (id: string) => dispatch(deleteTask(id)),
});

export interface ReducedProps extends DispatchProps {}
export default connect(mapDispatchToProps)(TaskRowComponent);
