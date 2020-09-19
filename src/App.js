import React from 'react';
import Todos from './Todos';
import Addform from './Addform';

class App extends React.Component {
  state={
    todos: [
      { id:1, content:"buy milk" },
      { id:2, content:"buy water" }
    ]
  }
  deleteTodo = (id) => {

    const tod = this.state.todos.filter( todo =>{
      
      return todo.id !== id;
      
    })
    this.setState({
      todos: tod
    })

  }
  addTodo = (todo) => {
    todo.id= Math.random()
    let tod = [...this.state.todos, todo];
    this.setState({
      todos:tod
    })
  }
  render(){
  return (
    <div className="todo-app  container">
      <h1 className="center blue-text">Todos</h1>
      <Todos todos={this.state.todos}  deleteTodo={this.deleteTodo}/>
      <Addform addTodo={this.addTodo}/>
      
    </div>
  );
}
}

export default App;
