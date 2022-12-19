import React from 'react'
import Film from './Film';

function Films({films}) {
  return (
    <div>
      <h1 className='available'>CURRENTLY AVAILABLE</h1>
      <div className='films'>
        <Film data = {films[0]}/>
        <Film data = {films[1]}/>
        <Film data = {films[2]}/>
        <Film data = {films[3]}/>
        <Film data = {films[4]}/>
        <Film data = {films[5]}/>
      </div>
    </div>
  );
};

export default Films;