import React from 'react'
import Film from './Film';

function Cart({films, empty, cartNum, removeDayCart, addDayCart, deleteCart}) {
  return (
    <div className='frame'>
      {cartNum > 0 ? (<h1 className='subtitle'>YOUR CART</h1>) : (<h1 className='subtitle'>CART IS EMPTY</h1>)}
      <div className='filmsb'>
        {films.map((film) => (
          <Film data = {film} key = {film.id} inCart = {1} removeDayCart = {removeDayCart} addDayCart = {addDayCart} empty = {empty}/>
        ))}
      </div>
      {cartNum > 0 ? (
        <>
        <button className = 'deleteCart' onClick={() => deleteCart()}>
        <p>Empty cart</p>
        </button>
        </>
      ) : (<></>)}
    </div>
  );
};

export default Cart;