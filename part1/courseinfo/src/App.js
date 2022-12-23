import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const createPart = (name, exercises) => {
  return { name, exercises }
}

const App = () => {
  const course = "Half stack application development"
  const part1 = createPart("Fundamentals of React", 10)
  const part2 = createPart("Using props to pass data", 7)
  const part3 = createPart("State of a component", 14)
  
  return (
    <div>
      <Header title={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App