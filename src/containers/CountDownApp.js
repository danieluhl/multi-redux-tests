import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createAction, createReducer } from 'redux-actions';
import CountDown from '../components/CountDown';

const onDecrement = createAction('Decrements');

export const countDownReducer = createReducer({
  [onDecrement]: state => ({value: state.value - 1})
}, {value: 0});

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({onDecrement}, dispatch);
}

const CountDownApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountDown);

export default CountDownApp;