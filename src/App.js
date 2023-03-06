import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3002/persons')
      .then(response => setPersons(response.data))
  }, [])

  const handleChange = setValue => e => setValue(e.target.value)

  const handleAddNewPerson = (e) => {
    e.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={filterQuery} handleChange={handleChange(setFilterQuery)} />
      <h2>add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleChangeName={handleChange(setNewName)}
        handleChangeNumber={handleChange(setNewNumber)}
        handleAddPerson={handleAddNewPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} query={filterQuery} />
    </div>
  )
}

export default App
