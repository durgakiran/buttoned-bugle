import React, { Component } from "react";

class Forms extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: 'blue'
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
                <br />
                <textarea value={"some default value"} placeholder="text area" />
                <br />
                <input type="checkbox" name="isFriendly" checked={this.state.isFriendly}
                onChange={this.handleChange}/>Is Friendly
                <br />

                <input type="radio" name="gender" value="Male"checked={this.state.gender === 'Male'}
                onChange={this.handleChange}/>Male
                <br />
                <input type="radio" name="gender" value="Female" checked={this.state.gender === 'Female'}
                onChange={this.handleChange}/>Female
                <br />
                {/**formik is react external package for writing forms easily */}

                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </form>
        )
    }
}

export default Forms;