import React from 'react'
import Film from './Film';
import { useState } from 'react';
import Pagination from './Pagination';

function Films({films, add, remove, refresh}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentFilms = films.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='frame'>
      <h1 className='subtitle'>CURRENTLY AVAILABLE</h1>
      <div className='films'>
        {currentFilms.map((film) => {
          return <Film data = {film} key = {film.id} add = {add} remove = {remove} refresh = {refresh} inCart = {0}/>
        })}
      </div>
      <Pagination totalPosts = {films.length} postsPerPage = {postsPerPage} setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
    </div>
  );
};

export default Films;