import React, {FC, useEffect, useState} from 'react';
import List from "./List";
import {ITodo} from "../types/types";
import ToDoItem from "./ToDoItem";
import axios from "axios";

const ToDosPage:FC = () => {
    const [toDos, setToDos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchToDos();
    }, []);

    const fetchToDos = async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setToDos(response.data)
        } catch (e) {
            alert(e);
        }
    }
    return (
        <List
            items={toDos}
            renderItem={(todo: ITodo) => <ToDoItem todo={todo} key={todo.id}/>}
        />
    );
};

export default ToDosPage;