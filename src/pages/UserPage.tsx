import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {getUsers} from "../services/api.jsonplaceholder";
import User from "../components/user/User";

const UserPage = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(response => setUsers(response));
    }, []);
    return (
        <div>
            <h2>UsersPage</h2>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

export default UserPage;