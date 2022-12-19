import React from 'react'
import { Link } from 'react-router-dom';
import { MdShoppingCart} from 'react-icons/md'
import { RiMovie2Fill } from 'react-icons/ri'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='title'>
           <h1 className='moviestore'>CineBuy</h1> 
        </div>
        <div className='icons'>
        <Link to = '/' className='link'>
            <RiMovie2Fill className='icon'/>
        </Link>
        <Link to = '/cart' className='link'>
            <MdShoppingCart className='icon'/>
        </Link>
        </div>
    </div>
  );
};

export default NavBar;