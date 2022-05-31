import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)

    console.log(...todos)
    }
  return (
    <div>
        <h1>List of Todos</h1>
        
        <ul> <li><input type="checkbox" id="todo1" name="todo1" value="dog" />
            <label> <b>Walking the dog</b></label> <br />
            </li>

            <li><input type="checkbox" id="todo2" name="todo2" value="cat" />
            <label> <b>Feeding the cat</b></label><br />
            </li>
            <li><input type="checkbox" id="todo13" name="todo3" value="exercise" />
            <label> <b>Take exercise</b></label><br />
            </li>
        </ul>
    </div>
  )
}

export default TodoList