
import './components/index.css';
//import TodoForm from './components/TodoForm';
//import TodoList from './components/TodoList';
import Todo from './components/Todo';
import {todos} from'./components/STORE';

function App() {
  //const myTodoList=todos.map( index => index.text);
  return (
    <div className="todo-app">
      
      <ul>
        {todos.map((text) => {
          return <li key={text.id}> { `${text.text}` } </li>
        })}
        </ul>
      
      
    </div>
  );
}

export default App;
