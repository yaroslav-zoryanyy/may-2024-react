import React, {useEffect, useState} from 'react';
import {IPost} from "../models/IPost";
import {getPosts, getUsers} from "../services/api.jsonplaceholder";
import Post from "../components/post/Post";

const PostPage = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPosts().then(response => setPosts(response));
    }, []);

    return (
        <div>
            <h2>PostsPage</h2>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default PostPage;