import PersonLine from "./PersonLine"

const PersonList = ({ persons, currentFilter }) => {
    return (
        <div>
            {persons.map(person => <PersonLine key={person.id} person={person} currentFilter={currentFilter} />)}
        </div>
    )
}

export default PersonList