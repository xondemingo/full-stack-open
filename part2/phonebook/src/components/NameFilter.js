const NameFilter = ({ currentFilter, handleTypeNewFilter }) => {
    return (
        <div>
            <label htmlFor="nameFilter">filter shown with</label>
            <input id="nameFilter" style={{ marginLeft: 3 }} value={currentFilter} onChange={handleTypeNewFilter} />
        </div>
    )
}

export default NameFilter