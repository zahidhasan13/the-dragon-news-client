import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [allNews, setAllNews] = useState([]);


    // All news load
    useEffect(() => {
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data => setAllNews(data))
    }, [])

    // Create User
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }

    // Sign In User
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Obser User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    // Logout User
    const logOutUser = () => {
        return signOut(auth);
    }

    // Google Sign In
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // GitHub Sign In
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }



    const authInfo = {
        user,
        loading,
        allNews,
        createUser,
        signInUser,
        logOutUser,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;