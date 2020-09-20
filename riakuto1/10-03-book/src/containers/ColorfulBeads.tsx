import { connect } from 'react-redux';

import ColorfulBeads from '../components/ColorfulBeads';
import { CounterState } from '../reducer';
import { StateProps } from '../types/ColorfulBeadsTypes';

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

export default connect(mapStateToProps)(ColorfulBeads);
