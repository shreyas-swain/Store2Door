import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from './firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithCredential, signInWithEmailAndPassword, signOut } from 'firebase/auth';



const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    // GoogleSignin.configure({
    //   webClientId: '450579770566-ish9go504c5tsalb100jnns3jdpoloio.apps.googleusercontent.com',
    // });

    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in.
        setUser(firebaseUser);
        await AsyncStorage.setItem('user', JSON.stringify(firebaseUser));
      } else {
        // User is signed out.
        setUser(null);
        await AsyncStorage.removeItem('user');
      }
      setIsLoading(false);
    });

    return unsubscribe; // unsubscribe on unmount
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth,email, password);
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  
  // const signInWithGoogle = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //     // const provider = new GoogleAuthProvider();
  //     const userInfo = await GoogleSignin.signIn();
  //     // const credential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);
  //     const credential = provider.credential(userInfo.idToken, userInfo.accessToken);
  //     await signInWithCredential(auth, credential);
  //   } catch (error) {
  //     console.error('Error signing in with Google:', error);
  //   }
  // };
 
  const register = async (email, password, name, phone, address) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Additional user data can be stored in Firestore or any other database
      // Here, we'll just log the user data
      console.log('Registered user:', firebaseUser.uid, firebaseUser.email, firebaseUser.displayName, phone, address);

      return { success: true, user: firebaseUser };
    } catch (error) {
      console.error('Error registering user:', error.message);
      return { success: false, error: error.message };
    }
  };


  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, register}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
