import React, { useState } from 'react'
import AddMovie from './Components/Addmovie/AddMovie'
import MovieList from './Components/MovieList/MovieList'
import Search from './Components/SearchMovie/Search'
import {movies} from './data/MovieData'
const App = () => {
  // nbich ysour des modifications lil state 
  // n7otha fi state
  const [ListMovie,setListMovie]=useState(movies)
        {/* partie ajout de film Function  */}
const handelAddMovie=(newMovie)=>{
setListMovie(
  [...ListMovie,newMovie]
)
}

// func recherhce

const [nameSearch,setNAmeSearch]=useState('')

  return (
    <div>
      {/* partie recherche  */}
      <Search  setNAmeSearch={setNAmeSearch} />


      <MovieList ListMovie={ListMovie}  nameSearch={nameSearch}/>

      <hr/>
      {/* partie ajout de film  */}
      <AddMovie  handelAddMovie={handelAddMovie}/>
    </div>
  )
}

export default App