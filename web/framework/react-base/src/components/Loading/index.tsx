import React from 'react';
import './index.css';

export const Loading = () => (
  <div className="loader">
    <div className="ball-scale-multiple">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export const LoadingBallBeat = (props: { show?: boolean; active?: boolean }) => (
  <div
    className={'loader ' + (props.active ? 'active-ball-beat' : '')}
    style={{ display: props.show ? 'flex' : 'none' }}
  >
    <div className="ball-beat">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

Loading.LoadingBallBeat = LoadingBallBeat;
