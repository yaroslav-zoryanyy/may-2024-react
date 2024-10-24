import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import {Link} from "react-router-dom";

type PostProps = {
    post:IPost;
}
const Post:FC<PostProps> = ({post}) => {
    return (
        <div>
            <li>
                {JSON.stringify(post)}
            </li>
            <Link to={post.id.toString()}>new window</Link>
        </div>
    );
};

export default Post;