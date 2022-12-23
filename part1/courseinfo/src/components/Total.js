const Total = ({ parts }) => {
    const total = parts.reduce((acum, part) => acum + part.exercises, 0)
    return <p>Total number of exercises: {total}.</p>
}

export default Total