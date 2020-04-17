import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { add, decrement, increment } from '../actions/counter';
import Counter from '../components/Counter';
import { StateProps, DispatchProps } from '../types/CounterTypes';
import { CounterState } from '../reducer';

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: amount => dispatch(add(amount)),
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
