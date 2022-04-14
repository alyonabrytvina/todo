import React from "react";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import AddTodo from "../AddTodo/AddTodo";
import {Provider} from "react-redux";
import {store} from "../../store/store";

const App: React.FC = () => {
    return (
        <Provider store={store}>
                <Header/>
                <AddTodo/>
                <TodoList/>
        </Provider>
    );
}

export default App;
