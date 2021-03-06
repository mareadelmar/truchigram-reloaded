import React, { useEffect } from "react";
import { useLocation } from "wouter";
import useUserData from "../hooks/useUserData";
import insta from "../assets/statics/instashot.png";

const PageHome = () => {
    const { userLogged, loguearConGoogle } = useUserData();
    const [, pushLocation] = useLocation();

    const handleAuth = () => {
        console.log("login");
        loguearConGoogle();
    };

    useEffect(() => {
        if (userLogged) {
            pushLocation("/feed");
        }
    }, [userLogged, pushLocation]);

    return (
        <section className="container">
            <div className="row">
                <div className="col m4 l5 offset-l1 off">
                    <img alt="bienvenida" src={insta} />
                </div>
                <div className="col m3 l3 top120">
                    <div className="card">
                        <div className="card-image">
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content center">
                            <img
                                alt="Jonatan Ariste"
                                className="circle homePic"
                                src="https://scontent-sea1-1.cdninstagram.com/vp/d48e1e31249f9224400253b4cf32599e/5D53373F/t51.2885-19/s150x150/54512168_825848254460977_4462647328951500800_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com"
                            />
                            <p>
                                Bienvenidos a <strong>Truchigram</strong>, esta
                                app# esta creada para el curso de Firebase de
                                escuela devRock para mostrar un primer ejemplo
                                del poder de esta base de datos y lo fácil que
                                resulta para arrancar a crear.
                            </p>
                        </div>
                        <div className="card-action center-align">
                            <button
                                className="waves-effect waves-light btn"
                                onClick={handleAuth}
                            >
                                Logear con Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHome;
