const PersonLine = ({ person }) => {
    const style = { marginTop: 2, marginBottom: 2 }
    return <p style={style}>{person.name}</p>
}

export default PersonLine