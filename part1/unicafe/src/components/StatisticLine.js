const StatisticLine = ({ text, score }) => {
    const style = { marginTop: 1, marginBottom: 1 }
    return <p style={style}>{text} {score}</p>
}

export default StatisticLine