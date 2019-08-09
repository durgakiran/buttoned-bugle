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
  componentWillMount() {
    //lifecycle method
    //depricated
  }
  
  componentWillUnmount() {
    //lifecycle method
    //depricated
  }
  
  static getDerivedStateFromProps(props, state) {
    //lifecycle nmethod
    //return the new, update state based upon the props
    //do not use this much, since it probably for rare cases
  }
  
  getSnapshotBeforeUpdae() {
    //lifecycle method
    //create a backup of the current way things are
  }
  
  componentDidMount() {//life cycle method
    //runs only once, when component created
    
  }
  
  //it is decpricated
  componentWillRecieveProps(nextProps) {
    //life cycle method
    //runs when component created
    //runs every time this component recieves props
  }
  
  shouldComponentUpdate() {
    //life cycle method
    /*
    * we can implement a logic the method could decide whether 
    * component should rerender or not
    */
  }
  
  componentWillUnmount(){
    //life cycle method
    /*
    *teardoewn or cleanup your code before your component disspears
    *(e.g): remove event handlers
    */
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
