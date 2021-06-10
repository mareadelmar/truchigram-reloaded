import React, { useEffect } from "react";
import { useLocation } from "wouter";
//import Feed from "../components/Feed";
import useUserData from "../hooks/useUserData";
//import { auth } from "../settings/firebase-config";

const PageFeed = () => {
    const { userData, setUserData, userLogged, loguearConGoogle, logOut } =
        useUserData();
    const [, pushLocation] = useLocation();

    const handleLogout = () => {
        logOut().then((res) => {
            pushLocation("/");
        });
    };

    // useEffect(() => {
    //     console.log("acá");
    //     if (userData === null) {
    //         pushLocation("/");
    //     }
    //     auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             console.log(user, "está logueado");
    //         } else {
    //             console.log("no hay nadie logueado");
    //         }
    //     });
    // }, []);
    //console.log(userData.photoURL, userData.displayName);

    return (
        <section className="page-feed">
            <div className="nav valign-wrapper">
                <div className="container">
                    <div className="row  margin0">
                        <div>
                            <div className="right-align flex">
                                <img src="" alt="" className="logo" />
                            </div>
                            <div className="title-container flex">
                                <h1>Truchigram</h1>
                            </div>
                        </div>
                        <div className="flex pic-container">
                            <ul id="dropdown2" className="dropdown-content">
                                <li>
                                    <a onClick={handleLogout}>logout</a>
                                </li>
                            </ul>
                            <a
                                className="dropdown-trigger"
                                href="#!"
                                data-target="dropdown2"
                            >
                                <img
                                    src={userData.photoURL}
                                    alt="Foto usuario logueado"
                                    className="cardPic"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* <div className="row">
                    <div className="col l6 offset-l3">
                        <FeedContent />

                        {ReactDOM.createPortal(
                            <Modal />,
                            document.getElementById("teleport")
                        )}
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default PageFeed;
