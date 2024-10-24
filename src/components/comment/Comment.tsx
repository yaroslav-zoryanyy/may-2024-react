import React, {FC} from 'react';
import {IComments} from "../../models/IComments";

type CommentProps = {
    comment: IComments;
}
const Comment:FC<CommentProps> = ({comment}) => {
    return (
        <li>
            {JSON.stringify(comment)}
        </li>
    );
};

export default Comment;