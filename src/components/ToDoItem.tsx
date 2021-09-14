import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface ToDoItemProps{
    todo : ITodo;
}

const ToDoItem: FC<ToDoItemProps> = ({todo}) => {
    return (
        <div>
            <input type='checkbox' checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default ToDoItem;