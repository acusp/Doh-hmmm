import * as React from 'react';

export const Loading: React.SFC = () => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 100px)'
    }}
  >
    <div className="line-scale">
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
