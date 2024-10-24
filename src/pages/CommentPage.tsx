import React, {useEffect, useState} from 'react';
import {IComments} from "../models/IComments";
import {getComments} from "../services/api.jsonplaceholder";
import Comment from "../components/comment/Comment";

const CommentPage = () => {
    const [comments, setComments] = useState<IComments[]>([])

    useEffect(() => {
        getComments().then(response => setComments(response));
    }, []);

    return (
        <div>
            <h2>CommentsPage</h2>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};

export default CommentPage;