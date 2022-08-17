import React, { Component } from 'react';

class PersonalInfo extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            editing: true,
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    }

    onSubmitInfo = (e) => {
        e.preventDefault();
        this.setState({
            editing: false,
        });
    }

    allowEdit = () => {
        this.setState({
            editing: true,
        });
    }

    render() {
        const { name, email, phone } = this.state;
        
        if (!this.state.editing) {
            return (
                <>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <button onClick={ this.allowEdit } className="edit">Edit</button>
                </>
            );
        }

        return (
            <>
                <h1>Personal Info!</h1>
                <form onSubmit={this.onSubmitInfo}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        title="###-###-####"
                        pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
                        value={phone}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }

}

export default PersonalInfo;
