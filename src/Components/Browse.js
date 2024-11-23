import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from '../Components/MainContainer'
import SecondaryContainer from '../Components/SecondaryContainer' 
import usePopularMovies from '../Hooks/usePopularMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
    
  )
}

export default Browse