import React from 'react';
import logo from './logo.svg';

function Header() {//it's important start component name with capitals, others jsx won't compile
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>
    )
}

export default Header