import {
    Checkbox,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    TextField,
} from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {Todo} from "../../store/reducers/todoReducer";

interface Props {
    todo: Todo
}

const TodoListItem: React.FC<Props> = ({todo}) => {
    return (
        <ListItem
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                    />
                </ListItemIcon>
                <ListItemText primary={todo.todo} />
                <DeleteIcon />
            </ListItemButton>
        </ListItem>
    );
}

export default TodoListItem;
