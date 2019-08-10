import React, { Component } from "react";

class Forms extends Component {
    constructor() {
        super();
        this.state = {}
        this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="First Name" onChange={this.handleChange}/>
                <h4>{this.state.firstName}</h4>
            </form>
        )
    }
}

export default Forms;