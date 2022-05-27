import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    
    const handleChange = e =>{
        setInput(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {/* <input type="text" 
        placeholder="Add a todo" 
        value={input} name="text" 
        className='todo-input' 
        onChange={handleChange}
        display="none"
        /> */}

        {/* <button className="todo-btn">Add todo</button> */}

       <p> <input type="checkbox" id="todo1" name="todo1" value="dog" />
            <label> <b>Walking the dog</b></label> <br />

            <input type="checkbox" id="todo2" name="todo2" value="cat" />
            <label> <b>Feeding the cat</b></label><br />

            <input type="checkbox" id="todo13" name="todo3" value="exercise" />
            <label> <b>Take exercise</b></label><br />
        </p>
    </form>

  )
}

export default TodoForm;