import React from "react";
import { useFeed } from "../hooks/useFeed";
import Post from "../components/Post";

const Feed = () => {
    const { feedData, loading } = useFeed();

    if (feedData) console.log(feedData);
    if (loading) return <p>loading...</p>;
    return (
        <React.Fragment>
            {feedData.length > 0 &&
                feedData
                    .map((item) => {
                        return (
                            <Post
                                key={item.txt}
                                text={item.txt}
                                image={item.pic}
                                avatar={item.avatar}
                                name={item.nombre}
                            />
                        );
                    })
                    .reverse()}
        </React.Fragment>
    );
};

export default Feed;
