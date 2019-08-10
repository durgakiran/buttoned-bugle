import React, { Component } from "react";

class Forms extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target;
        this.setState({
            [name]: value
        })
        type === "checkbox"  ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange}/>
                <h4>{this.state.firstName}</h4>
                <textarea value={"some default value"} placeholder="text area" />
                
                <input type="checkbox" name="isFriendly" checked={this.state.isFriendly}
                onChange={this.handleChange}/>Is Friendly
                

                <input type="radio" name="gender" value="Male"checked={this.state.gender === 'Male'}
                onChange={this.handleChange}/>Male

                <input type="radio" name="gender" value="Female" checked={this.state.gender === 'Female'}
                onChange={this.handleChange}/>Female
            </form>
        )
    }
}

export default Forms;