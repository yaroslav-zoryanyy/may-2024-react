import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getCommentsOfPosts} from "../services/api.jsonplaceholder";
import {IComments} from "../models/IComments";


const PostDetailsCommentsPage = () => {
    const [comments, setComments] = useState<IComments[] | null>(null)
    let {id} = useParams()

    useEffect(() => {
        if (id){
            getCommentsOfPosts(id).then(response => setComments(response))
        }
    }, []);
    return (
        <div>
            {JSON.stringify(comments)}
        </div>
    );
};

export default PostDetailsCommentsPage;