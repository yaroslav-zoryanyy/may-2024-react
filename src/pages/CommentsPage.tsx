import React, {useEffect} from 'react';
import {getComments} from "../services/api.jasonplaceholder";
import {useStore} from "../store";

const CommentsPage = () => {
    let {commentSlice:{loadComments,allComments}} = useStore()

    useEffect(() => {
        getComments().then(value => loadComments(value))
    }, [loadComments]);

    return (
        <div>
            <h2>CommentsPage</h2>
            <hr/>
            {allComments.map(comment => <div key={comment.id}>{comment.name}</div>)}
        </div>
    );
};

export default CommentsPage;