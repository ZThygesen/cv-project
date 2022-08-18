import React, { useState } from 'react';
import '../styles/PersonalForm.css';

const PersonalInfo = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [editing, setEditing] = useState(true);

    const onSubmitInfo = (e) => {
        e.preventDefault();
        setEditing(false);
    };

    const allowEdit = () => {
        setEditing(true);
    };

    if (!editing) {
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
                <button onClick={allowEdit} className="edit">Edit</button>
            </>
        );
    }

    return (
        <form onSubmit={onSubmitInfo}>
            <div id="inputs">
                <label htmlFor="first-name">
                    First Name
                    <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
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
                        onChange={(e) => setLastName(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </label>
            </div>

            <button type="submit">Save</button>
        </form>
    );
}

export default PersonalInfo;
