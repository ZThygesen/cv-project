import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalInfo from './components/ProfessionalInfo';
import EducationInfo from './components/EducationInfo';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      professionalComponents: [],
      educationComponents: [],
    };
  }

  handleAddClick = (addType) => {
    if (addType === 'professional') {
      this.setState({
        professionalComponents: this.state.professionalComponents.concat(<ProfessionalInfo key={uniqid()} />),
      });
    }
    if (addType === 'education') {
      this.setState({
        educationComponents: this.state.educationComponents.concat(<EducationInfo key={uniqid()} />),
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Hellooo</h1>
        <PersonalInfo />
        <div className='professional'>
          { this.state.professionalComponents }
          <button onClick={ () => this.handleAddClick('professional') } id='professional-info-btn'>+ Professional Info</button>
        </div>
        <div className='education'>
          { this.state.educationComponents }
          <button onClick={ () => this.handleAddClick('education') } id='education-info-btn'>+ Education Info</button>
        </div>
      </div>
    );
  }
}

export default App;
