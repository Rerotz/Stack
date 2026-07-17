import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <div>
      <td>{props.text}</td>
      
    </div>
  )
}
const StatisticLine2 = (props) => {
  return (
    <div>
      <td>{props.value}</td>
    </div>
  )
}

const Statistics = (props) => {
   if (props.all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table >
      <tr> <td><StatisticLine text="good"  /></td>  <td><StatisticLine2  value={props.good} /></td>  </tr>
      <tr> <td><StatisticLine text="neutral" /></td>  <td><StatisticLine2  value={props.neutral} /></td>  </tr>
      <tr> <td><StatisticLine text="bad" /></td>  <td><StatisticLine2  value={props.bad} /></td>  </tr>
      <tr> <td><StatisticLine text="all" /></td>  <td><StatisticLine2  value={props.all} /></td>  </tr>
      <tr> <td><StatisticLine text="average" /></td>  <td><StatisticLine2  value={props.average} /></td>  </tr>
      <tr> <td><StatisticLine text="positive" /></td>  <td><StatisticLine2  value={props.positive * 100 + '%'} /></td>  </tr>
    </table>
    
  )
}
   
 

const App = () => {
  const titulo = 'give feedback'
  const titulo2 = 'statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>{titulo}</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>{titulo2}</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} average={(good - bad) / (good + neutral + bad)} positive={(good) / (good + neutral + bad)} />
    </div>
  )
}

export default App