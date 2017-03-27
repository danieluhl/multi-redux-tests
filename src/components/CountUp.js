import React from 'react';

export default function CountUp(props) {
  return (
    <div>
      <button onClick={props.onIncrement}>+</button>
      <p>{props.value}</p>
    </div>
  );
}
