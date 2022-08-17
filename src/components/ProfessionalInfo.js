import React, { Component } from 'react';

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
                <h1>Professional Info!</h1>
                <form onSubmit={ this.onSubmitInfo }>
                    <label htmlFor="company">Company Name</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={company}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="position">Job Title</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={position}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="description">Job Description</label>
                    <input
                        type="text-area"
                        id="description"
                        name="description"
                        value={description}
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
                    <button onClick={ () => this.props.onDelete('professional', this.props.id) } type="button">Delete</button>
                </form>
            </>
        );
    }

}

export default ProfessionalInfo;
