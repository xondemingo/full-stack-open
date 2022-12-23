import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const createPart = (name, exercises) => {
  return { name, exercises }
}

const App = () => {
  const course = "Half stack application development"
  const parts = [
    createPart("Fundamentals of React", 10),
    createPart("Using props to pass data", 7),
    createPart("State of a component", 140)
  ]

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App