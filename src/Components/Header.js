import React from 'react'
import { LOGO_IMG } from '../Utils/constants'

const Header = () => {
  return (
    <div className=" w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10"> 
      <img className='w-44 ' 
      src={LOGO_IMG} 
      alt='netflix-logo' 
      />
    </div>
  )
}

export default Header