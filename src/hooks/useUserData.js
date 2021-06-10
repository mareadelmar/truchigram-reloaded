import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import firebase from "firebase/app";
import { auth } from "../settings/firebase-config";

export default function useUserData() {
    const { userData, setUserData } = useContext(UserContext);
    const [userLogged, setUserLogged] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const loguearConGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((res) => {
            console.log(res.user);
            setUserData(res.user);
            setUserLogged(true);
        });
    };

    const logOut = () => {
        auth.signOut().then((res) => {
            setUserData(null);
            setUserLogged(false);
            console.log("desloguearse");
        });
    };

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserLogged(true);
                setUserData(user);
                console.log(user, "está logueado");
            } else {
                setUserLogged(false);
                setUserData(null);
                console.log("no hay nadie logueado");
            }
        });
    }, []);
    return {
        errorMessage,
        userData,
        setUserData,
        userLogged,
        loguearConGoogle,
        logOut,
    };
}
