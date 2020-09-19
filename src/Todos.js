import React from 'react';

const Todos = (props) => {

    const todolist = props.todos.length ? (
       props.todos.map(todo => {
            return(
           <div className="collection-item" key={todo.id}>
               <span onClick={() => props.deleteTodo(todo.id)}>{todo.content}</span>
           </div>
                
            )

        })
    ) : (

        <p className="center">No todos</p>
    )

    return(
        <div className="todos collection">
            {todolist}

        </div>

    );
} 

export default Todos;