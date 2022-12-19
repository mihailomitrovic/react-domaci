import React from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

function Film({data}) {
  return (
    <div className='film'>

         <div className='dataContainer'>
            <div className='imageContainer'>
                <img src={data.image.jpg} alt='Slika'/>
            </div>

            <div className='dataSubcontainer'>
                <h1>{data.title}</h1>
                <p>Year: {data.year}</p>
                <p>Genre: {data.genre}</p>
                <p className='tagline'>{data.tagline}</p>
            </div>
         </div>
         <p>{data.synopsis}</p>

        <div className='btns'>
            <div className='btnsSub'>
                <button className='btn1'>
                    <IoMdAdd style = {{color:'white', fill:'white'}}/>
                </button>
                <button className='btn1'>
                    <IoMdRemove style = {{color:'white', fill:'white'}}/>
                </button>
            </div>

            <div className='btnsSub'>
                <p className='days'>Days: 3</p>
                <button className='btn2'>
                    <p>Add to cart</p>
                </button>
            </div>
        </div>

    </div>
  );
};

export default Film;