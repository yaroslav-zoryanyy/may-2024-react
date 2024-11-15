import React from 'react';
import './Menu.css';
import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <div>
            <hr/>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
                <li><Link to={'/posts-comments'}>PostsWithComments</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;