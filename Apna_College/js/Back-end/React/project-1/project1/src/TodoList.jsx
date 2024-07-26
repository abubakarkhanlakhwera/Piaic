import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
function TodoList() {
    let [newTodo ,SetNeTodo] = useState("");
    let [todos,SetTodos] = useState([{task: newTodo, id: uuidv4()}]);
    

    let addNewTask = () => {
        SetTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4()}];
        });
        SetNeTodo("");
    };
    let updateTodoValue = (event) => {
        SetNeTodo(event.target.value);
    };
    let deleteTodo = (id) => {
       let copy = todos.filter((todo) => todo.id != id);
       SetTodos(copy);
    };
       let upperaseAll = () => {
        let newArr = todos.map((all) => {
            return{
                ...all,
                task: all.task.toUpperCase(),
            };
        });
        SetTodos(newArr);
       };
    let uppercaseOne = (id) => {
        SetTodos((prevTask) => 
            prevTask.map((todo) => {
                if(todo.id == id) {
                    return{
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                }else {
                    return todo;
                };
            })
    );
    };
    return(
        <div>
        <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
        <br />
        <button onClick={addNewTask}>Add Task</button>
        <br /><br /><br />
        <hr />
        <h4>Tasks Todo </h4>
        <ul>
        {
            todos.map((todo) => {
                return <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={uppercaseOne}>Upper case</button>
                    </li>
            })
        }
        </ul>
        <br />
        <button onClick={upperaseAll}>Upper case All</button>
        </div>

        
    )
};

export {TodoList};