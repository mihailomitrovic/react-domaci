import React from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { FaTrashAlt } from 'react-icons/fa'

function Film({data, add, remove, refresh, inCart, removeDayCart, addDayCart, empty}) {    
  return (
    <div className={inCart === 0 ? 'film' : 'filmb'}>
        {inCart === 0 ? (
        <>
        <div className='dataContainer'>
            <div className='imageContainer'>
                <img src={data.image.jpg} alt='Slika'/>
            </div>

            <div className='dataSubcontainer'>
                <h1>{data.title}</h1>
                <p><span style={{fontWeight: 'bold'}}>Year</span>: {data.year}</p>
                <p><span style={{fontWeight: 'bold'}}>Genre</span>: {data.genre}</p>
                <p className='tagline'>{data.tagline}</p>
            </div>
         </div>
         <p>{data.synopsis}</p>

        <div className='btns'>
            <div className='btnsSub'>
                <button className='btn1' onClick={() => add(data.id)}>
                    <IoMdAdd className='btn'/>
                </button>
                <button className={data.days > 0 ? 'btn1' : 'btn1rem'} onClick={() => remove(data.id)}>
                    <IoMdRemove className='btn'/>
                </button>
            </div>

            <div className='btnsSub'>
                <p className='days'>Days: {data.days}</p>
                <button className={data.days > 0 ? 'btn2' : 'btn2a'} onClick={() => refresh(data.id)}>
                    <p>Add to cart</p>
                </button>
        </div>
        </div>

        </>
        ) : (
        <>
        <div className='dataContainer'>
            <div className='imageContainer'>
                <img src={data.image.jpg} alt='Slika'/>
            </div>

            <div className='dataSubcontainerb'>
                <h1 style={{marginLeft: 0.72 + "em"}}>{data.title}</h1>
                <p className='datab'>{data.year} • {data.genre}</p>
                <p className='taglineb'>{data.tagline}</p>
                <div className='btnscart'>
                    <p className='days' style={{marginLeft: 1.1 + "em"}}>Days: {data.cartDays}</p>
                    <div className='btnsSubCart'>
                    <button className='btn1b' onClick={() => addDayCart(data.id)}>
                        <IoMdAdd className='btn'/>
                    </button>
                    <button className={data.cartDays > 1 ? 'btn1b' : 'btn1brem'} onClick={() => removeDayCart(data.id)}>
                        <IoMdRemove className='btn'/>
                    </button>
                </div>
            </div>
            </div>
         </div>

        <div className='btns'>
            <div className='btnsSub'>
            <button className='trash' onClick={() => empty(data.id)}>
                <FaTrashAlt className='btnb'/>
            </button>
        </div>    
        </div>

        </>
        )}
    </div>
  );
};

export default Film;