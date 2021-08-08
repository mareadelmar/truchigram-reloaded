import React, { useState, useEffect } from "react";
import useUserData from "../hooks/useUserData";
import M from "materialize-css";
import { storage, database } from "../settings/firebase-config";

const Modal = () => {
    const { userData } = useUserData();
    const [postText, setPostText] = useState("");
    const [postFile, setPostFile] = useState("");

    useEffect(() => {
        M.AutoInit();
    }, []);

    const userImg = userData ? userData.photoURL : null;
    const userName = userData ? userData.displayName : null;

    const handleTextChange = (e) => {
        console.log(e.target.value);
        setPostText(e.target.value);
    };

    const handleFileChange = (e) => {
        console.log(e.target.files);
        setPostFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // imagen a storage
        console.log(postFile);
        const storageRef = storage.ref(`fotos/${postFile.name}`);
        const task = storageRef.put(postFile);

        // post a database
        task.then(() => {
            const record = {
                avatar: userData.photoURL,
                nombre: userData.displayName,
                txt: postText,
                pic: storageRef.fullPath,
            };

            const dbRef = database.ref("pictures");
            const newPicture = dbRef.push();
            newPicture.set(record);
        }).catch((err) => {
            console.error(err);
        });
    };

    return (
        <div>
            <a
                href="#modal1"
                className="btn-floating btn-large waves-effect waves-light modal-trigger red FAB"
                id="fab"
            >
                <i className="material-icons">add</i>
            </a>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Posteá en Truchigram</h4>
                    <div className="chip">
                        <img src={userImg} alt="avatar" />
                        {userName}
                    </div>

                    <div className="row">
                        <form className="col l12" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="input-field col s9 l4">
                                    <i className="material-icons prefix">
                                        mode_edit
                                    </i>
                                    <textarea
                                        id="icon_prefix2"
                                        className="materialize-textarea"
                                        onChange={handleTextChange}
                                    />
                                    <label htmlFor="icon_prefix2">
                                        Mensaje
                                    </label>

                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                    />

                                    <button
                                        className="btn waves-effect waves-light modal-close waves-effect waves-green btn-flat"
                                        type="submit"
                                    >
                                        Subir
                                        <i className="material-icons right">
                                            send
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer" />
            </div>
        </div>
    );
};

export default Modal;
