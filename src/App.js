import React, { Component } from 'react';
import './App.css';
import toDoData from "./toDoData"
import TodoItem from "./TodoItem"


/**
 * we can only add className to actual dom elements
 * we should not add className to custom elements
 */
function App() {
  
  const toDoItems = toDoData.map( data => <TodoItem  key= {data.id} item={data}/>)
    return (
      <div className="todo-list">
        {toDoItems}
      </div>
    );
}

export default App;
