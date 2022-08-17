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
    this.createElem(addType);
  }

  createElem = (elemType) => {
    const id = uniqid();

    if (elemType === 'professional') {
      const elem = <ProfessionalInfo key={id} id={id} onDelete={this.handleDeleteClick} />;

      this.setState({
        professionalComponents: this.state.professionalComponents.concat(elem),
      });
    }
    if (elemType === 'education') {
      const elem = <EducationInfo key={id} id={id} onDelete={this.handleDeleteClick} />;

      this.setState({
        educationComponents: this.state.educationComponents.concat(elem),
      });
    }
  }

  handleDeleteClick = (deleteType, id) => {
    if (deleteType === 'professional') {
      this.setState({
        professionalComponents: this.state.professionalComponents.filter(elem => elem.key !== id),
      });
    }
    if (deleteType === 'education') {
      this.setState({
        educationComponents: this.state.educationComponents.filter(elem => elem.key !== id),
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
