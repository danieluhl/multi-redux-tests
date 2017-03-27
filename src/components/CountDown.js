import React from 'react';

export default function CountDown(props) {
  return (
    <div>
      <p>{props.value}</p>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
}
