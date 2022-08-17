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
                    <p>{school}</p>
                    <p>{degree}</p>
                    <p>{startDate}</p>
                    <p>{endDate}</p>
                    <button onClick={ this.allowEdit }>Edit</button>
                    <button onClick={ () => this.props.onDelete('education', this.props.id) } type="button">Delete</button>
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
                            />
                        </label>
                    </div>
                    <div className="buttons">
                        <button type="submit">Submit</button>
                        <button onClick={ () => this.props.onDelete('education', this.props.id) } type="button">Delete</button>
                    </div>
                </form>
            </>
        );
    }

}

export default EducationInfo;
