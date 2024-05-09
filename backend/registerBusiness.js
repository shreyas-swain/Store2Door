import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useState } from "react";
import { app } from "../firebase";
import firebase from 'firebase/app';
import 'firebase/storage';
const registerBusiness = async (businessData) => {
  console.log(businessData)
  try {
    // Add a new document with a generated ID to the "StoreData" collection
    const docRef = await addDoc(collection(db, 'StoreData'),businessData)
    businessData['shopid'] = docRef.id;
    AsyncStorage.removeItem('urBusiness');
    AsyncStorage.setItem('urBusiness', JSON.stringify(businessData));
    console.log('Business form submitted successfully with ID: ', docRef.id);
    console.log(await AsyncStorage.getItem('urBusiness'))
    return docRef.id; // Return the ID of the newly created document
  } catch (error) {
    console.error('Error submitting business form: ', error);
    throw error; // Propagate the error to the caller
  }
};

export default registerBusiness;
