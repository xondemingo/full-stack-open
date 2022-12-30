import { useState } from "react"
import Anecdote from "./components/Anecdote"
import AnecdoteMostVoted from "./components/AnecdoteMostVoted"
import Button from "./components/Button"

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const getRandomIntUpTo = (limit) => Math.floor(Math.random() * limit)

  const [selected, setSelected] = useState(getRandomIntUpTo(anecdotes.length))
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    let i = selected
    do {
      i = getRandomIntUpTo(anecdotes.length)
    } while (i === selected)
    setSelected(i)
  }

  const handleVoteForCurrentAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const indexOfMostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <div>
        <Button text="vote" handleClick={handleVoteForCurrentAnecdote} />
        <Button text="next anecdote" handleClick={handleNextAnecdote} />
      </div>
      <h2>Anecdote with most votes</h2>
      <AnecdoteMostVoted text={anecdotes[indexOfMostVoted]} votes={votes[indexOfMostVoted]} />
    </div>
  )
}

export default App