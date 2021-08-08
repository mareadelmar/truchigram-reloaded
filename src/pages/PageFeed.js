import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

const PageFeed = () => {
    return (
        <section className="page-feed">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="top120 col m10 l6 offset-l3 offset-m1">
                        <Feed />
                        {ReactDOM.createPortal(
                            <Modal />,
                            document.getElementById("portal")
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageFeed;
