import React, { Component } from "react";

class Forms extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
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
                <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange}/>
                <h4>{this.state.firstName}</h4>
                <textarea value={"some default value"} placeholder="text area" />
                <input type="checkbox" name="is Friendly" checked={this.state.isFriendly}
                name="is friendly"
                onChange={this.handleCheckbox}/>
            </form>
        )
    }
}

export default Forms;