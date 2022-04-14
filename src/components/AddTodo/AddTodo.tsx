import React, {useState} from "react";
import {
    Button,
    FormControl,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import {actionAddTodo} from "../../store/types/todoTypes";
import {useDispatch} from "react-redux";
import {Todo} from "../../store/reducers/todoReducer";

const AddTodo: React.FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (todo: string): void => {
        const newTodos: Todo[] = [...todos, {todo, complete: false}];
        setTodos(newTodos);
        dispatch(actionAddTodo(todos))
    };

    return (
        <Paper elevation={10} className="paperStyle"
               sx={{
                   display: 'flex',
                   width: '80%',
                   height: '200px',
                   margin: '20px',
                   justifyContent: 'center',
                   alignItems: 'center',
                   flexDirection: 'column'
               }}>
            <Typography variant="h2">
                My todos
            </Typography>
            <FormControl
                variant="standard"
                sx={{
                    margin: '20px',
                    display: 'flex',
                    width: '70%',
                    height: '55px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
            >
                <TextField
                    label="What needs to be done?"
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button
                    variant="contained"
                    sx={{
                        height: '55px'
                    }}
                    onClick={() => addTodo(value)}
                >
                    +
                </Button>
            </FormControl>
        </Paper>
    );
}

export default AddTodo;