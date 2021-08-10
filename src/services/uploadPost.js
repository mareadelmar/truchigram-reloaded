import { storage, database } from "../settings/firebase-config";

export const uploadPost = ({ postFile, postText, userData }) => {
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
            fecha: new Date().toISOString(),
        };

        const dbRef = database.ref("pictures");
        const newPicture = dbRef.push();
        newPicture.set(record);
    }).catch((err) => {
        console.error(err);
    });
};
