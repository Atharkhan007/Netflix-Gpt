import React, { useEffect } from 'react'
import { LOGO_IMG } from '../Utils/constants'
import { USER_AVATAR } from '../Utils/constants'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth } from '../Utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const handleSingOut = () => {
      signOut(auth).then(() => {
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email , displayName, photoURL} = user;
        dispatch(addUser(
          {uid:uid, 
          email: email,
          displayName:displayName,
          photoURL: photoURL}));
          navigate('/browse')
        
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
    
  }, [])

  
  return (
    <div className=" w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between"> 
      <img className='w-44 ' 
      src={LOGO_IMG} 
      alt='netflix-logo' 
      />
      { user && (<div className='flex p-2'>
        <img className='w-12 h-12' src={user?.photoURL}
        alt='User-avatar'
        />
        <button onClick={handleSingOut} className=' text-white font-bold'>(Sign Out)</button>
      </div>)}
    </div>
  )
}

export default Header