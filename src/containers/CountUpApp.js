import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createAction, createReducer } from 'redux-act';
import CountUp from '../components/CountUp';

const onIncrement = createAction('increments some things');

export const countUpReducer = createReducer({
  [onIncrement]: state => ({value: state.value + 1})
}, {value: 0});

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({onIncrement}, dispatch);
}

const CountUpApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountUp);

export default CountUpApp;