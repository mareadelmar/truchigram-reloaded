import React, { useEffect } from "react";
import { useLocation } from "wouter";
import useUserData from "../hooks/useUserData";
import logo from "../assets/statics/logo.svg";

const Header = () => {
    const { userData, logOut } = useUserData();
    const [, pushLocation] = useLocation();

    const handleLogout = () => {
        logOut().then((res) => {
            pushLocation("/");
        });
    };

    useEffect(() => {
        if (userData === null) {
            pushLocation("/");
        }
    }, [userData, pushLocation]);

    const userImg = userData ? userData.photoURL : null;
    //const userName = userData ? userData.displayName : null;

    return (
        <div className="nav valign-wrapper">
            <div className="container">
                <div className="row  margin0">
                    <div className="">
                        <div className="col s2 l1  right-align flex header">
                            <img src={logo} alt="logo" className="logo" />
                        </div>
                        <div className="col s3 l1 flex header title-container">
                            <h1 className="">truchigram</h1>
                        </div>
                    </div>
                    <div className="col s2 l1 offset-s5 offset-l7 right-align flex header">
                        <ul id="dropdown2" className="dropdown-content">
                            <li>
                                <a onClick={handleLogout} href="/">
                                    logout
                                </a>
                            </li>
                        </ul>
                        <a
                            className="dropdown-trigger"
                            href="#!"
                            data-target="dropdown2"
                        >
                            <img
                                src={userImg}
                                alt="Foto usuario logueado"
                                className="cardPic"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
