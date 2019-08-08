import React from 'react';//helps in compiling JSX
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function MyApp() {//function component
  //it return jsx
  
  return (
    <div>
      <h1>Kiran</h1>
      <p>this is kiran, this is kiran, this is kiran, this is kiran</p>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>
    
  )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);

//ReactDOM.render(what I want to render, where I want to render)

//JSX is javascript version of html
//JSX should always have a wrapper element


var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph"
