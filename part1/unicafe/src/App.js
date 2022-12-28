import { useState } from "react"
import FeedbackButtons from "./components/FeedbackButtons"
import Statistics from "./components/Statistics"

const App = () => {
  const [ feedback, setFeedback ] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleAddFeedback = {
    handleAddGoodFeedback: () => setFeedback({ ...feedback, good: feedback.good + 1 }),
    handleAddNeutralFeedback: () => setFeedback({ ...feedback, neutral: feedback.neutral + 1 }),
    handleAddBadFeedback: () => setFeedback({ ...feedback, bad: feedback.bad + 1 })
  }

  return (
    <div>
      <h2>give feedback</h2>
      <FeedbackButtons handleAddFeedback={handleAddFeedback} />
      <h2>statistics</h2>
      <Statistics feedback={feedback} />
    </div>
  )
}

export default App