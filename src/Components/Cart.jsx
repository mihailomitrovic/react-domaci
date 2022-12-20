import React from 'react'
import Film from './Film';

function Cart({films, empty}) {
  return (
    <div className='frame'>
      <h1 className='subtitle'>YOUR CART</h1>
      <div className='filmsb'>
        {films.map((film) => (
          <Film data = {film} key = {film.id} inCart = {1}/>
        ))}
      </div>
    </div>
  );
};

export default Cart;