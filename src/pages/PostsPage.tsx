import React, {useEffect} from 'react';
import {getPosts} from "../services/api.jasonplaceholder";
import {useStore} from "../store";

const PostsPage = () => {
    let {postSlice:{loadPosts,allPosts}} = useStore()

    useEffect(() => {
        getPosts().then(value => loadPosts(value))
    }, [loadPosts]);

    return (
        <div>
            <h2>PostsPage</h2>
            <hr/>
            {allPosts.map(post => <div key={post.id}>{post.title}</div>)}
        </div>
    );
};

export default PostsPage;