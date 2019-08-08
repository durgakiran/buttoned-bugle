import React from 'react';//helps in compiling JSX
import ReactDOM from 'react-dom';
import TodoItem from "./TodoItem"; //default exported elements should not be imported using curly braces
import './index.css';

// function MyApp() {//function component
//   //App is child of this function
//   //it return jsx
  
//   return (
//     <App />
    
//   )
// }

ReactDOM.render(
  <TodoItem />,
  document.getElementById('root')
);

//ReactDOM.render(what I want to render, where I want to render)

//JSX is javascript version of html
//JSX should always have a wrapper element


var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph"
