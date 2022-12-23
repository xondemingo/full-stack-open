import Course from "./components/Course"

const createPart = (name, exercises) => {
  return { name, exercises }
}

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      createPart("Fundamentals of React", 191),
      createPart("Using props to pass data", 73),
      createPart("State of a component", 140)
    ]
  }

  return <Course course={course} />
}

export default App