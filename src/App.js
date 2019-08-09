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
  
  generateItems() {
    const toDoItems = toDoData.map( data => <TodoItem  key= {data.id} item={data}/>)
    return toDoItems;
  }
  render() {
    const toDoItems = this.generateItems();
    return (
      <div className="todo-list">
        {toDoItems}
      </div>
    )
  }
}

export default App;
