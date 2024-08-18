import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import Swal from 'sweetalert2'


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const auth = getAuth(app);

    const createUser = ( email, password, username, photo) =>{
        
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Updating user profile with username and photoURL
            return updateProfile(user, {
                displayName: username,
                photoURL: photo
            });
        })
        .then(() => {
            setLoading(false); 
        })
        .catch((error) => {
            console.error('Error:', error.message);
            setLoading(false); 
        });
        
    }

    //Login user:
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Logout user:
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
        .then(result => {
            Swal.fire({
                title: "Successfully Logged out!",
                text: "You clicked the button!",
                icon: "success"
            });

        })
        .catch(error => {
            console.log(error)
        })
    }

    //Managing user:
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                 setUser(currentUser);
                 console.log('Observing current user', currentUser)
                 setLoading(false)
             });
             return () =>{
                 unSubscribe();
             }
     
         }, [] )

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;