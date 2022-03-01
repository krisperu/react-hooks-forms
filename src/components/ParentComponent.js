import React, { useState } from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(e) {
    console.log(e.target.value)
    setFirstName(e.target.value)
  }
  function handleLastNameChange(e) {
    console.log(e.target.value) 
    setLastName(e.target.value)
  }
  return (
    <div>
        <Form
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
        />
        <DisplayData 
            firstName={firstName}
            lastName={lastName}
        />
    </div>
  )
}

export default ParentComponent