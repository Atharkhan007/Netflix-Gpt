import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from '../Components/MainContainer'
import SecondaryContainer from '../Components/SecondaryContainer' 


const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
    
  )
}

export default Browse