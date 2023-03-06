import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ListMovie,nameSearch}) => {
  return (
    <div  style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
     {
      ListMovie.filter(
        (el)=> 
        el.Title.toLowerCase().includes(nameSearch.toLowerCase().trim())  )
      .map((e)=> <MovieCard movie={e}  />)
     }
    </div>
  )
}

export default MovieList