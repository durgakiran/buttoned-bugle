import React, { Component } from "react";

class Forms extends Component {
    constructor() {
        super();
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleChange(event) {
        this.setState({
            firstName: event.target.value,
            isFriendly: false
        })
    }

    handleCheckbox(){
        this.setState({
            isFriendly: true
        })
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="First Name" onChange={this.handleChange}/>
                <h4>{this.state.firstName}</h4>
                <input type="checkbox" name="is Friendly" checked={this.state.isFriendly} onChange={this.handleCheckbox}/>
            </form>
        )
    }
}

export default Forms;