const Total = ({ parts }) => {
    const total = parts.reduce((acum, part) => acum + part.exercises, 0)
    return <p style={{ fontWeight: "bold" }}>Total number of exercises: {total}.</p>
}

export default Total