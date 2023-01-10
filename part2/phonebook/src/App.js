import { useState } from "react"
import NewPersonForm from "./components/NewPersonForm"
import PersonList from "./components/PersonList"

const App = () => {
  const createPerson = (name, number) => {
    return { name, number }
  }

  const [persons, setPersons] = useState([
    createPerson("Arto Hellas", "39-44-5323523"),
    createPerson("Óscar López González", "652333333")
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleAddNewPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    }
    else {
      setPersons(persons.concat(createPerson(newName, newNumber)))
      setNewName("")
      setNewNumber("")
    }
  } 

  const handleTypeNewName = (event) => setNewName(event.target.value)
  const handleTypeNewNumber = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <NewPersonForm handleAddNewPerson={handleAddNewPerson} newName={newName} handleTypeNewName={handleTypeNewName} 
        newNumber={newNumber} handleTypeNewNumber={handleTypeNewNumber} />
      <h2>Numbers</h2>
      <PersonList persons={persons} />
    </div>
  )
}

export default App