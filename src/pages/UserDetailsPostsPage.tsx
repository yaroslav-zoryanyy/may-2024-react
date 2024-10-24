import React, {useEffect, useState} from 'react';
import {IPost} from "../models/IPost";
import {getPostsOfUser} from "../services/api.jsonplaceholder";
import {useParams} from "react-router-dom";

const UserDetailsPostsPage = () => {
    const [posts, setPosts] = useState<IPost[] | null>(null)
    let {id} = useParams()

    useEffect(() => {
        if (id){
            getPostsOfUser(id).then(response => setPosts(response))
        }
    }, []);
    return (
        <div>
            {JSON.stringify(posts)}
        </div>
    );
};

export default UserDetailsPostsPage;