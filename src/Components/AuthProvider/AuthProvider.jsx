import { createContext, useEffect, useState } from "react";
import { auth } from "../../Provider/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
     const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    const updatedProfile = (providedData) => {
        return updateProfile(auth.currentUser, providedData);
    };
    const handleGoogleSignIn = () => {
            setLoading(true);
            return signInWithPopup(auth,provider);
    }
    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogOut,
        setUser,
        updatedProfile,
        handleGoogleSignIn,
        user,
        loading
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
     return () => {
                unsubscribe();
            }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;