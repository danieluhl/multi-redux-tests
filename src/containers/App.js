import React from 'react';
import CountDownApp, { countDownReducer } from './CountDownApp';
import CountUpApp, { countUpReducer } from './CountUpApp';
import { combineReducers } from 'redux';

function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce((p, r) => r(p, current), previous);
}

export const AppReducers = reduceReducers(countDownReducer, countUpReducer);

export default function App(props) {
  return (
    <div>
      <CountUpApp />
      <CountDownApp />
    </div>
  );
}
