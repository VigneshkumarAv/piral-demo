import * as React from 'react';
import { ApiData } from '../models/types';

export default ({data}) => {
  return (
    <>
      <h1>Title</h1>
      {data.map((item:ApiData)=>(
        <ul>
          <li key={item.id}>{item.title}</li>
        </ul>
      ))}
    </>
  );
};
