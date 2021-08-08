import { useState, useEffect, useContext, useCallback } from "react";
import UserContext from "../context/UserContext";
import firebase from "firebase/app";
import { auth } from "../settings/firebase-config";

export default function useUserData() {
    const { userData, setUserData } = useContext(UserContext);
    const [userLogged, setUserLogged] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const loguearConGoogle = useCallback(() => {
        setLoading(true);
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((res) => {
            console.log(res.user);
            setUserData(res.user);
            setUserLogged(true);
            setLoading(false);
        });
    }, [setUserData]);

    const logOut = useCallback(() => {
        setLoading(true);
        auth.signOut()
            .then((res) => {
                setUserData(null);
                setUserLogged(false);
                setLoading(false);
                console.log("desloguearse");
            })
            .catch((err) => {
                console.error(err);
                setErrorMessage(true);
            });
    }, [setUserData]);

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user !== null) {
                setUserLogged(true);
                setUserData(user);
                console.log(user.displayName, "está logueado");
            } else {
                setUserLogged(false);
                setUserData(null);
                console.log("no hay nadie logueado");
            }
        });
    }, [setUserData]);
    return {
        errorMessage,
        loading,
        userData,
        setUserData,
        userLogged,
        loguearConGoogle,
        logOut,
    };
}
