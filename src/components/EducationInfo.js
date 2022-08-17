import React, { Component } from 'react';

class EducationInfo extends Component {
    constructor() {
        super();

        this.state = {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
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
        })
    }

    allowEdit = () => {
        this.setState({
            editing: true,
        })
    }

    render() {
        const { school, degree, startDate, endDate } = this.state;

        if (!this.state.editing) {
            return (
                <>
                    <p>{school}</p>
                    <p>{degree}</p>
                    <p>{startDate}</p>
                    <p>{endDate}</p>
                </>
            );
        }

        return (
            <>
                <h1>Education Info!</h1>
                <form onSubmit={ this.onSubmitInfo }>
                    <label htmlFor="school">School Name</label>
                    <input
                        type="text"
                        id="school"
                        name="school"
                        value={school}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        id="degree"
                        name="degree"
                        value={degree}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="start-date">Start Date</label>
                    <input
                        type="date"
                        id="start-date"
                        name="startDate"
                        value={startDate}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="end-date">End Date</label>
                    <input
                        type="date"
                        id="end-date"
                        name="endDate"
                        value={endDate}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }

}

export default EducationInfo;
