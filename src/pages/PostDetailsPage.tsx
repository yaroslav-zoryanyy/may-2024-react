import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {IUser} from "../models/IUser";
import {getPost, getUser} from "../services/api.jsonplaceholder";
import {IPost} from "../models/IPost";

const PostDetailsPage = () => {
    const [post, setPost] = useState<IPost | null>(null)

    let {id} = useParams()
    useEffect(() => {
        if (id){
            getPost(id).then(response=> setPost(response))
        }
    }, []);


    return (
        <div>
            <h3>Post:</h3>
            {JSON.stringify(post)}
            <hr/>
            <h3>Comments:</h3>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;