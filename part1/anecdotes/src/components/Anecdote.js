const Anecdote = ({ text, votes }) => {
    return (
        <div>
            <p>{text}</p>
            <p>This anecdote has {votes} votes.</p>
        </div>
    )
}

export default Anecdote