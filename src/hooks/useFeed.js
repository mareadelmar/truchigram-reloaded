import { useState, useEffect, useCallback } from "react";
import { database } from "../settings/firebase-config";

export const useFeed = () => {
    const [feedData, setFeedData] = useState([]);
    const [loading, setLoading] = useState(false);

    const childAdded = useCallback(() => {
        const dbRef = database.ref("pictures");

        dbRef.on("child_added", (snapshot) => {
            setFeedData((prev) => prev.concat(snapshot.val()));
        });
    }, []);

    useEffect(() => {
        setLoading(true);
        const dbRef2 = database.ref();
        dbRef2
            .child("pictures")
            .get()
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    let dataArray = [];
                    const res = snapshot.val();
                    Object.entries(res).map((entry) => {
                        console.log(entry[1]);
                        dataArray.push(entry[1]);
                    });
                    setFeedData(dataArray);
                } else {
                    console.log("No data available");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        childAdded();
    }, [childAdded]);

    return {
        feedData,
        loading,
    };
};
