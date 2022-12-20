import React from 'react'
import Film from './Film';

function Films({films, add, remove, refresh}) {
  return (
    <div className='frame'>
      <h1 className='subtitle'>CURRENTLY AVAILABLE</h1>
      <div className='films'>
        {films.map((film) => {
          return <Film data = {film} key = {film.id} add = {add} remove = {remove} refresh = {refresh} inCart = {0}/>
        })}
      </div>
    </div>
  );
};

export default Films;