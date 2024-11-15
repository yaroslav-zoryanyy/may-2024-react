import React from 'react';
import {useStore} from "../store";

const PostsWithComments = () => {
    let {postSlice:{allPosts}} = useStore()
    let {commentSlice:{allComments}} = useStore()

    const postsWithComments = allPosts.map((post) => ({
        ...post,
        allComments: allComments.filter((comment) => comment.postId === post.id),
    }));
    return (
        <div>
            <h2>PostsWithComments</h2>
            <hr/>
            {postsWithComments.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <h4>Comments:</h4>
                    <ul>
                        {post.allComments.map((comment) => (
                            <li key={comment.id}>{comment.body}</li>
                        ))}
                    </ul>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default PostsWithComments;