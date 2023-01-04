const NewPersonForm = ({ handleAddNewPerson, newName, handleTypeNewName }) => {
    return (
        <div>
            <form onSubmit={handleAddNewPerson}>
                <label htmlFor="newName">name:</label>
                <input id="newName" style={{ marginLeft: 3 }} value={newName} onChange={handleTypeNewName} />
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default NewPersonForm