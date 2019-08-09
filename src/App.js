import React, { Component } from 'react';
import './App.css';
import toDoData from "./toDoData"
import TodoItem from "./TodoItem"
import './todo.css';


/**
 * we can only add className to actual dom elements
 * we should not add className to custom elements
 */
// function App() {
  
//   const toDoItems = toDoData.map( data => <TodoItem  key= {data.id} item={data}/>)
//     return (
//       <div className="todo-list">
//         {toDoItems}
//       </div>
//     );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: toDoData
    }
    //why binding with this
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      });
      return {
        todoss: updatedTodos
      }
    })
  }
  
  componentDidMount() {//life cycle method
    
  }
  
  render() {//life cycle method
    let toDoItemsNew = this.state
    .todos
    .map( data => <TodoItem  key= {data.id} item={data}
                    handleChange = {this.handleChange} />);
         
    return (
      <div className="todo-list">
        {toDoItemsNew}
      </div>
    )
  }
}

export default App;
