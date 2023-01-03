import Course from "./components/Course"

const createPart = (id, name, exercises) => {
  return { name, exercises }
}

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      createPart(1, "Fundamentals of React", 191),
      createPart(2, "Using props to pass data", 73),
      createPart(3, "State of a component", 140),
      createPart(4, "Fake part", 38)
    ]
  }

  return <Course course={course} />
}

export default App