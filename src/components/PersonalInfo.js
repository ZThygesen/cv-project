import React, { Component } from 'react';
import '../styles/PersonalForm.css';

class PersonalInfo extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
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
        const { firstName, lastName, email, phone } = this.state;
        
        if (!this.state.editing) {
            return (
                <>
                    <div className="info">
                        <div className="display">
                            <p>Name:</p>
                            <p>{firstName} {lastName}</p>
                        </div>
                        <div className="display">
                            <p>Email:</p>
                            <p>{email}</p>
                        </div>
                        <div className="display">
                            <p>Phone:</p>
                            <p>{phone}</p>
                        </div>
                    </div>
                    <button onClick={this.allowEdit} className="edit">Edit</button>
                </>
            );
        }

        return (
            <form onSubmit={this.onSubmitInfo}>
                <div id="inputs">
                    <label htmlFor="first-name">
                        First Name
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            placeholder="John"
                            value={firstName}
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="last-name">
                        Last Name
                        <input
                            type="text"
                            id="last-name"
                            name="lastName"
                            placeholder="Doe"
                            value={lastName}
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="phone">
                        Phone
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="123-456-7890"
                            title="123-456-7890"
                            pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
                            value={phone}
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                </div>

                <button type="submit">Save</button>
            </form>
        );
    }

}

export default PersonalInfo;
