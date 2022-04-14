import React from "react";
import {List} from "@mui/material";
import TodoListItem from "../TodoListItem/TodoListItem";
import {RootStateOrAny, useSelector} from "react-redux";
import {Todo} from "../../store/reducers/todoReducer";

const TodoList: React.FC = () => {
    const todosState = useSelector((state: RootStateOrAny) => state.todo.todos);

    return (
        <List sx={{width: '100%', maxWidth: 360}}>
            {todosState.map((todo: Todo, index: string) => <TodoListItem key={index} todo={todo} />
            )}
        </List>
    );
}

export default TodoList;