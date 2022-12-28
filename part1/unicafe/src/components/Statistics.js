import StatisticLine from "./StatisticLine"

const Statistics = ({ feedback }) => {
    const { good, neutral, bad } = feedback
    const total = good + neutral + bad

    if (total === 0) {
        return (
            <div>
                No feedback has been gathered yet
            </div>
        )
    }

    const average = ((good - bad) / total).toFixed(2)
    const positivePercentage = (100 * good / total).toFixed(2) + " %"
    return (
        <div>
            <StatisticLine text="good" score={good} />
            <StatisticLine text="neutral" score={neutral} />
            <StatisticLine text="bad" score={bad} />
            <StatisticLine text="all" score={total} />
            <StatisticLine text="average" score={average} />
            <StatisticLine text="positive" score={positivePercentage} />
        </div>
    )
}

export default Statistics