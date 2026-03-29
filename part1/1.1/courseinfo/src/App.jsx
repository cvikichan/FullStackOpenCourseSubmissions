const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [part1, part2, part3]
  const allexercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course = {course} />
      <Content part = {parts} exercise = {allexercises} />
      <Total total = {allexercises} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} exercise = {props.exercise[0]} />
      <Part part={props.part[1]} exercise = {props.exercise[1]} />
      <Part part={props.part[2]} exercise = {props.exercise[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
       <p>
        {props.part} {props.exercise}
       </p>
  </div>
  )
}

const Total = (props) => {
  let sum = 0
  for (let i = 0; i < props.total.length; i++) {
  sum += props.total[i]
}
  
  return(
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

export default App