import { useState } from "react"
import NewPersonForm from "./components/NewPersonForm"
import PersonList from "./components/PersonList"

const App = () => {
  const createPerson = (name) => {
    return { name }
  }

  const [persons, setPersons] = useState([
    createPerson("Arto Hellas"),
    createPerson("Óscar López González")
  ])
  const [newName, setNewName] = useState("")

  const handleAddNewPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    }
    else {
      setPersons(persons.concat(createPerson(newName)))
      setNewName("")
    }
  } 

  const handleTypeNewName = (event) => setNewName(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <NewPersonForm handleAddNewPerson={handleAddNewPerson} newName={newName} handleTypeNewName={handleTypeNewName} />
      <h2>Numbers</h2>
      <PersonList persons={persons} />
    </div>
  )
}

export default App