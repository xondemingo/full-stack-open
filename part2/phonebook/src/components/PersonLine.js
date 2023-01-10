const PersonLine = ({ person, currentFilter }) => {
    const style = { marginTop: 2, marginBottom: 2 }
    if (!currentFilter) {
        return <p style={style}>{person.name} {person.number}</p>
    }
    const re = new RegExp(`(.*)(${currentFilter})(.*)`, 'i')
    const match = person.name.match(re)
    return <p style={style}>{match[1]}<span style={{ backgroundColor: "yellow" }}>{match[2]}</span>{match[3]} {person.number}</p>
}

export default PersonLine