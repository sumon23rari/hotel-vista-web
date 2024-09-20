import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';
export const AuthContext=createContext(null)
const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null);
  console.log(user,'sitution')
  const [loading, setLoading] = useState(true);
  const axiosPublic=useAxiosPublic();
  const googleProvider= new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

 

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser,'checkIn')
      setUser(currentUser)
      if(currentUser){
        console.log(currentUser,'current')
        const userInfo={email:currentUser?.email};
        console.log(userInfo,'usreInfo')
       
        axiosPublic.post('/jwt',userInfo)
        .then((res)=>{
          if (res.data.token) {
            console.log(res.data.token,'resData')
            localStorage.setItem('hotelManageMent',res.data.token)
            setLoading(false)
          }
          else{
            localStorage.removeItem('hotelManageMent')
          }
        })
      }
    
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [axiosPublic]);
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  };
  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
  }
  
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;