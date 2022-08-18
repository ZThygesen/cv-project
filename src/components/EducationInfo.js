import React, { useState } from 'react';
import '../styles/EducationForm.css';

const EducationInfo = (props) => {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [editing, setEditing] = useState(true);
       
    const onSubmitInfo = (e) => {
        e.preventDefault();
        setEditing(false);
    }

    const allowEdit = () => {
        setEditing(true);
    }

    if (!editing) {
        return (
            <>
                <div className="info">
                    <div className="display">
                        <p>School:</p>
                        <p>{school}</p>
                    </div>
                    <div className="display">
                        <p>Degree:</p>
                        <p>{degree}</p>
                    </div>
                    <div className="display">
                        <p>Start date:</p>
                        <p>{startDate}</p>
                    </div>
                    <div className="display">
                        <p>End Date:</p>
                        <p>{endDate}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={ allowEdit }>Edit</button>
                    <button onClick={ () => props.onDelete('education', props.id) } type="button">Delete</button>
                </div>
            </>
        );
    }

    return (
        <>
            <form onSubmit={onSubmitInfo}>
                <div id="inputs">
                    <label htmlFor="school">
                        School Name
                        <input
                            type="text"
                            id="school"
                            name="school"
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="degree">
                        Degree
                        <input
                            type="text"
                            id="degree"
                            name="degree"
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="start-date">
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
                    <label htmlFor="end-date">
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
                    <button onClick={ () => props.onDelete('education', props.id) } type="button">Delete</button>
                </div>
            </form>
        </>
    );
}

export default EducationInfo;
