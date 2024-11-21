import React, { useRef, useState } from 'react';
import Header from './Header';
import { BG_IMG } from '../Utils/constants';
import { checkValidData } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile } from 'firebase/auth';
import { auth } from '../Utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';

const Login = () => {


  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  

  const handleButtonClick = () => {
    // Extract input values
    const nameValue = !isSignInForm && name.current ? name.current.value : null;
    const emailValue = email.current ? email.current.value : null;
    const passwordValue = password.current ? password.current.value : null;

    // Validate fields
    if (!emailValue || !passwordValue) {
      setErrorMessage('Email and Password are required.');
      return;
    }

    const message = checkValidData(nameValue, emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign-Up Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value ,  
            photoURL: "https://imgs.search.brave.com/DbqPhkhjKqTVJCh3m2jieq0srfHnwy9uY0Y3ulYsdzQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlltRTBaVGs0/Wm1NdE1tWTNZUzAw/WWpkaUxXSXlPREl0/Wldaa09EazFaRFl3/T1RRNVhrRXlYa0Zx/Y0djQC5qcGc"
          }).then(() => {
            const  {uid, email, displayName, photoURL} = auth.current.value;
            dispatch(addUser({uid:uid , email: email, displayName: displayName, photoURL: photoURL}));

          }).catch((error) => {
            setErrorMessage(error.message)
          });          
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.error('Sign-up Error:', error.code, error.message);
        });
    } else {
      // Sign-In Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
         
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.error('Sign-in Error:', error.code, error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear any previous error messages
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img className="" src={BG_IMG} alt="netflix-browse-img" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 my-36 mx-auto p-12 bg-black right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="bg-slate-800 p-4 my-4 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="User Email"
          className="bg-slate-800 p-4 my-4 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-slate-800 p-4 my-4 w-full"
        />

        {errorMessage && <p className="text-red-500 font-bold">{errorMessage}</p>}

        <button
          className="py-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix? Sign Up'
            : 'Already registered? Sign In Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
