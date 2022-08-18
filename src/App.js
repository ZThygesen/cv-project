import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalInfo from './components/ProfessionalInfo';
import EducationInfo from './components/EducationInfo';
import './styles/App.css';
import uniqid from 'uniqid';

const App = () => {
  const [professionalComponents, setProfessionalComponents] = useState([]);
  const [educationComponents, setEducationComponents] = useState([]);

  const handleAddClick = (addType) => {
    createElem(addType);
  };

  const createElem = (elemType) => {
    const id = uniqid();

    if (elemType === 'professional') {
      const elem = <ProfessionalInfo key={id} id={id} onDelete={handleDeleteClick} />;

      setProfessionalComponents(professionalComponents.concat(elem));
    }
    if (elemType === 'education') {
      const elem = <EducationInfo key={id} id={id} onDelete={handleDeleteClick} />;

      setEducationComponents(educationComponents.concat(elem));
    }
  };

  const handleDeleteClick = (deleteType, id) => {
    if (deleteType === 'professional') {
      setProfessionalComponents(professionalComponents.filter(elem => elem.key !== id));
    }
    if (deleteType === 'education') {
      setEducationComponents(educationComponents.filter(elem => elem.key !== id));
    }
  };

  return (
    <div className="container">
      <header>
        <h1>CV Application</h1>
      </header>
      <div className="main">
        <div className="personal">
          <h1>Personal Info</h1>
          <PersonalInfo />
        </div>
        <div className="professional">
          <h1>Professional Info</h1>
          <div className="elems">
            {professionalComponents}
          </div>
          <button onClick={ () => handleAddClick('professional') } id='professional-info-btn'>+ Professional Info</button>
        </div>
        <div className="education">
          <h1>Education Info</h1>
          <div className="elems">
            {educationComponents}
          </div>
          <button onClick={ () => handleAddClick('education') } id='education-info-btn'>+ Education Info</button>
        </div>
      </div>
    </div>
  );
}

export default App;
