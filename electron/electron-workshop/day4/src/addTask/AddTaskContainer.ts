import { Dispatch } from "redux";
import { UserInput } from "../types";
import { connect } from "react-redux";
import AddTaskComponent from "./AddTaskComponent";
import { addTask } from "../actions";

interface DispatchProps {
  addTask: (input: UserInput) => void;
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addTask: (input: UserInput) =>
    dispatch(addTask(input.taskName, input.deadline)),
});

export interface ReducedProps extends DispatchProps {}
export default connect(null, mapDispatchToProps)(AddTaskComponent);
