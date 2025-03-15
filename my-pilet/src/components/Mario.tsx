import * as React from 'react';
import { MARIO_URL } from '../static/constants';

export default () => {
  return (
    <>
      <h1>Mario Game</h1>
      <div>Enjoy the wonderful and challenging world of Mario!</div>
      <iframe src={MARIO_URL} width="1000px" height="500px"></iframe>
    </>
  );
};
