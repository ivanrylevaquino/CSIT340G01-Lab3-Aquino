const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part
        name={props.part1.name}
        exercises={props.part1.exercises}
      />
      <Part
        name={props.part2.name}
        exercises={props.part2.exercises}
      />
      <Part
        name={props.part3.name}
        exercises={props.part3.exercises}
      />
    </div>
  )
}

const App = () => {
  const course = 'YOUR CIT-U COURSE'

  const part1 = {
    name: 'YOUR SUBJECT 1',
    exercises: 3
  }

  const part2 = {
    name: 'YOUR SUBJECT 2',
    exercises: 3
  }

  const part3 = {
    name: 'YOUR SUBJECT 3',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </div>
  )
}

export default App