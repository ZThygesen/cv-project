import React, { Component } from 'react';
import '../styles/EducationForm.css';

class EducationInfo extends Component {
    constructor(props) {
        super(props);

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
                        <button onClick={ this.allowEdit }>Edit</button>
                        <button onClick={ () => this.props.onDelete('education', this.props.id) } type="button">Delete</button>
                    </div>
                </>
            );
        }

        return (
            <>
                <form onSubmit={this.onSubmitInfo}>
                    <div id="inputs">
                        <label htmlFor="school">
                            School Name
                            <input
                                type="text"
                                id="school"
                                name="school"
                                value={school}
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="buttons">
                        <button type="submit">Save</button>
                        <button onClick={ () => this.props.onDelete('education', this.props.id) } type="button">Delete</button>
                    </div>
                </form>
            </>
        );
    }

}

export default EducationInfo;
