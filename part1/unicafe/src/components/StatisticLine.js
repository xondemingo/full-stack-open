const StatisticLine = ({ text, score }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{score}</td>
        </tr>
    )
}

export default StatisticLine