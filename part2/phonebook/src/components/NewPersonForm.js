const NewPersonForm = ({ handleAddNewPerson, newName, handleTypeNewName, newNumber, handleTypeNewNumber }) => {
    return (
        <div>
            <form onSubmit={handleAddNewPerson}>
                <div>
                    <label htmlFor="newName">name:</label>
                    <input id="newName" style={{ marginLeft: 3 }} value={newName} onChange={handleTypeNewName} />
                </div>
                <div>
                    <label htmlFor="newNumber">number:</label>
                    <input id="newNumber" style={{ marginLeft: 3, marginTop: 3, marginBottom: 3 }} 
                        value={newNumber} onChange={handleTypeNewNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default NewPersonForm