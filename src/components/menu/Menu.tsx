import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ol>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to='/comments'>Comments</Link>
                </li>
            </ol>
        </div>
    );
};

export default Menu;