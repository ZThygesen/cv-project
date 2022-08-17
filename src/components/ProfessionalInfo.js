import React, { Component } from 'react';
import '../styles/ProfessionalForm.css';

class ProfessionalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: '',
            position: '',
            description: '',
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
        const { company, position, description, startDate, endDate } = this.state;

        if (!this.state.editing) {
            return (
                <>
                    <p>{company}</p>
                    <p>{position}</p>
                    <p>{description}</p>
                    <p>{startDate}</p>
                    <p>{endDate}</p>
                    <button onClick={ this.allowEdit }>Edit</button>
                    <button onClick={ () => this.props.onDelete('professional', this.props.id) } type="button">Delete</button>
                </>
            );
        }

        return (
            <>
                <form onSubmit={ this.onSubmitInfo }>
                    <div id="inputs">
                        <label htmlFor="company" className="company">
                            Company Name
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={company}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label htmlFor="position" className="position">
                            Job Title
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={position}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label htmlFor="description" className="description">
                            Job Description
                            <textarea
                                id="description"
                                name="description"
                                rows={5}
                                value={description}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label htmlFor="start-date" className="start-date">
                            Start Date
                            <input
                                type="date"
                                id="start-date"
                                name="startDate"
                                value={startDate}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label htmlFor="end-date" className="end-date">
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
                        <button type="submit">Save</button>
                        <button onClick={ () => this.props.onDelete('professional', this.props.id) } type="button">Delete</button>
                    </div>
                </form>
            </>
        );
    }

}

export default ProfessionalInfo;
