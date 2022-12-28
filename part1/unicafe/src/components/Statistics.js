import StatisticLine from "./StatisticLine"

const Statistics = ({ feedback }) => {
    return (
        <div>
            <StatisticLine text="good" score={feedback.good} />
            <StatisticLine text="neutral" score={feedback.neutral} />
            <StatisticLine text="bad" score={feedback.bad} />
        </div>
    )
}

export default Statistics