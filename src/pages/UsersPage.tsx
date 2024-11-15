import React, {useEffect} from 'react';
import {getUsers} from "../services/api.jasonplaceholder";
import {useStore} from "../store";

const UsersPage = () => {
    let {userSlice:{loadUsers,allUsers}} = useStore()

    useEffect(() => {
        getUsers().then(value => loadUsers(value))
    }, [loadUsers]);

    return (
        <div>
           <h2>UsersPage</h2>
            <hr/>
            {allUsers.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UsersPage;