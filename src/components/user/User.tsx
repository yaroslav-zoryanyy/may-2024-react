import React, {FC, useState} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";

type UserProps = {
    user:IUser
}
const User:FC<UserProps> = ({user}) => {
    return (
        <div>
            <li>
                {JSON.stringify(user)}
            </li>
            <Link to={user.id.toString()}>new window</Link>
        </div>
    );
};

export default User;