import * as React from 'react';
import { YT_URL } from '../static/constants';

export default () => {
  return (
    <>
      <h1>Movie Trailer</h1>
      <iframe
        className="w-full aspect-video"
        width="1000px"
        height="500px"
        src={YT_URL}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      ></iframe>
    </>
  );
};
