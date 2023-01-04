import PersonLine from "./PersonLine"

const PersonList = ({ persons }) => {
    return (
        <div>
            {persons.map(person => <PersonLine key={person.name} person={person} />)}
        </div>
    )
}

export default PersonList