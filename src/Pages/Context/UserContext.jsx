import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const [loading,setLoading]= useState(true);
    const [user, setUser] = useState({});



    // user create or signup //
    const createUser = (email, password) => {
        setLoading (true)
        return createUserWithEmailAndPassword(auth, email, password);


    };

    // verify email //
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
            
    };

    // reset password
    const passwordReset =(email)=>{

      return sendPasswordResetEmail(auth ,email);
    };

    // sign in / sign up by using google//

    const googleSignIn = () => {
        setLoading (true)
        return signInWithPopup(auth, googleProvider);
    };


    // update profile

    const updateUser = (fullName) => {

        updateProfile(auth.currentUser, {
            displayName: fullName
        });

    }

    // user sign in or login ////

    const signIn = (email, password) => {
        setLoading (true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // hook using 

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            setLoading (false);

        });

        return () => unSubscribe();

    }, []);


    // signout

    const logOut = () => {
        return signOut(auth)
            .then(() => {

            }).catch((error) => {

            });
    }

    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        updateUser,
        googleSignIn,
        verifyEmail,
        passwordReset,
        loading
    };

    
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;