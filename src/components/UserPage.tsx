import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import {useHistory} from "react-router-dom";


const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useHistory();

    useEffect(() => {
        fetchUsers();

    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (e) {
            alert(e);
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) => <UserItem onClick={(user)=>{history.push('/users/'+user.id)}} user={user} key={user.id}/>}
        />
    );
};

export default UserPage;