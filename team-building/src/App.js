import React, { useState } from 'react';

import Form from './Form';

function App() {
  const initialFormValues = {
//text boxes
    name: '',
    email: '',
//dropdown
    role: '',
  }

  //set state of the form
  const [team, setTeam] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);
  
  const [error, setError] = useState('');

  //how to update the form
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }
  
  //configuring what happens on submit
  const submit =() =>{
    const newTeammate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role:formValues.role
    };

    if (!newTeammate.name || !newTeammate.email || !newTeammate.role) {
      setError("You've got to fill out all the fields!");
      return;
    }
    setTeam(...team, team.concat(newTeammate));
    setFormValues(initialFormValues)
    setError('');
  }

  return (
    <div className="App">
      <h1>Apply today!</h1>
      <h3 className='error'>{error}</h3>
      <Form 
      values={formValues} 
      update={updateForm} 
      submit={submit}/>
      {
        team.map(teammate => {
          return (
            <h3>{`${teammate.name} has applied to the ${teammate.role} position. We will reach out to you at ${teammate.email}`}</h3>
          )
        })
      }
    </div>
  );
}

export default App;
