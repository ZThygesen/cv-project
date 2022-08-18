import React, { useState } from 'react';
import '../styles/ProfessionalForm.css';

const ProfessionalInfo = (props) => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
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
                        <p>Company:</p>
                        <p>{company}</p>
                    </div>
                    <div className="display">
                        <p>Job Title:</p>
                        <p>{position}</p>
                    </div>
                    <div className="display">
                        <p>Job Description:</p>
                        <p>{description}</p>
                    </div>
                    <div className="display">
                        <p>Start Date:</p>
                        <p>{startDate}</p>
                    </div>
                    <div className="display">
                        <p>End Date:</p>
                        <p>{endDate}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={ allowEdit }>Edit</button>
                    <button onClick={ () => props.onDelete('professional', props.id) } type="button">Delete</button>
                </div>
            </>
        );
    }

    return (
        <>
            <form onSubmit={ onSubmitInfo }>
                <div id="inputs">
                    <label htmlFor="company" className="company">
                        Company Name
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="position" className="position">
                        Job Title
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="description" className="description">
                        Job Description
                        <textarea
                            id="description"
                            name="description"
                            rows={5}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="start-date" className="start-date">
                        Start Date
                        <input
                            type="date"
                            id="start-date"
                            name="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="end-date" className="end-date">
                        End Date
                        <input
                            type="date"
                            id="end-date"
                            name="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="buttons">
                    <button type="submit">Save</button>
                    <button onClick={ () => props.onDelete('professional', props.id) } type="button">Delete</button>
                </div>
            </form>
        </>
    );
}

export default ProfessionalInfo;
