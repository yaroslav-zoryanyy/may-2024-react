import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {getUser} from "../services/api.jsonplaceholder";
import {IUser} from "../models/IUser";

const UserDetailsPage = () => {
    const [user, setUser] = useState<IUser | null>(null)

    let {id} = useParams()
    useEffect(() => {
        if (id){
            getUser(id).then(response=> setUser(response))
        }
    }, []);
    return (
        <div>
            <h3>User:</h3>
            {JSON.stringify(user)}
            <hr/>
            <h3>Posts:</h3>
            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;