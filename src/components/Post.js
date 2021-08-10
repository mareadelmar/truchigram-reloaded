import React, { useState, useEffect } from "react";
import { storage } from "../settings/firebase-config";

const Post = ({ text, image, avatar, name }) => {
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        let reference = image;
        storage
            .ref(reference)
            .getDownloadURL()
            .then((res) => {
                console.log(res);
                setImgUrl(res);
            })
            .catch((err) => console.error(err));
    }, [image]);

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <div className="row margin0 ">
                        <div className="col l1 valign-wrapper">
                            <img
                                src={avatar}
                                alt="Avatar"
                                className="circle cardPic inline"
                            />
                        </div>
                        <div className="col s8 l6 valign-wrapper fix-nombre">
                            <p className="inline cardName">{name}</p>
                        </div>
                    </div>
                </div>

                <div className="card-image">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="card-content">
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default Post;
