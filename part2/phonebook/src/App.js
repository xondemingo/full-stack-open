import { useState } from "react"
import NewPersonForm from "./components/NewPersonForm"
import PersonList from "./components/PersonList"
import NameFilter from "./components/NameFilter"

const App = () => {
  const createPerson = (id, name, number) => {
    return { id, name, number }
  }

  const [persons, setPersons] = useState([
    createPerson(1, 'Arto Hellas', '040-123456'),
    createPerson(2, 'Ada Lovelace', '39-44-5323523'),
    createPerson(3, 'Dan Abramov', '12-43-234345'),
    createPerson(4, 'Mary Poppendieck', '39-23-6423122')
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [currentFilter, setCurrentFilter] = useState("")

  const handleAddNewPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    }
    else {
      const maxIndex = Math.max(...persons.map(person => person.id))
      setPersons(persons.concat(createPerson(maxIndex+1, newName, newNumber)))
      setNewName("")
      setNewNumber("")
    }
  } 

  const handleTypeNewName = (event) => setNewName(event.target.value)
  const handleTypeNewNumber = (event) => setNewNumber(event.target.value)
  const handleTypeNewFilter = (event) => setCurrentFilter(event.target.value)

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(currentFilter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <NameFilter currentFilter={currentFilter} handleTypeNewFilter={handleTypeNewFilter} />
      <h2>Add a new contact</h2>
      <NewPersonForm handleAddNewPerson={handleAddNewPerson} newName={newName} handleTypeNewName={handleTypeNewName} 
        newNumber={newNumber} handleTypeNewNumber={handleTypeNewNumber} />
      <h2>Numbers</h2>
      <PersonList persons={personsToShow} />
    </div>
  )
}

export default App