import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';

import { useAlert } from 'src/utils/AlertProvider';
import * as actions from 'src/redux/actions';

const HomeScreen = ({ count, resetCount, increment, decrement }) => {
  const alert = useAlert();

  const inc = () => increment();
  const dec = () => count && count > 0 ? decrement() : alert.showAlert({ type: 'error', message: 'The value cannot be less than 0!' });
  const reset = () => resetCount();

  return (
    <Home
      count={count}

      inc={inc}
      dec={dec}
      reset={reset}
    />
  );
};

const mapStateToProps = (state) => ({
  count: state.count.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(actions.incrementAction()),
  decrement: () => dispatch(actions.decrementAction()),
  resetCount: () => dispatch(actions.resetCounterAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
