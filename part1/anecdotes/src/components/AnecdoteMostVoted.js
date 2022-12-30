import Anecdote from "./Anecdote"

const AnecdoteMostVoted = ({ text, votes }) => {
    return votes === 0 ? <div>No one has voted yet.</div> : <Anecdote text={text} votes={votes} />
}

export default AnecdoteMostVoted