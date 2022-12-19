import React from 'react'
import { Link } from 'react-router-dom';
import { MdShoppingCart} from 'react-icons/md'
import { RiMovie2Fill } from 'react-icons/ri'

function NavBar() {
  return (
    <div className='navBar'>
      <div className='titleContainer'>
           <h1 className='title'>CineRent</h1> 
        </div>
        <div className='iconContainer'>
        <Link to = '/' className='link'>
            <RiMovie2Fill className='icon'/>
        </Link>
        <Link to = '/cart' className='link'>
            <MdShoppingCart className='icon'/>
            <p>143</p>
        </Link>
        </div>
    </div>
  );
};

export default NavBar;