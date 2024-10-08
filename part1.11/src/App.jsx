import { useState } from 'react'



const StatisticLine = (props) => {
  return (
    <tr>
      <td>
          {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const Statistics = (props) => {

   if (props.good + props.neutral + props.bad === 0) {

    
    return <p>no feedback is given</p>
    
  }

  // täällä on kaikki statistics
    return (

        <table>
          <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />

        <StatisticLine text="all" value={(props.good + props.neutral + props.bad) } />

        <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad) } />

        <StatisticLine text="positive" value={(props.good * 100) / (props.good + props.neutral + props.bad) + "%"}/>

        </table>
        

    )
  }

const App = () => {
  // save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}>Good </button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral </button>
            <button onClick={() => setBad(bad + 1)}>Bad </button>

      <h1>statistics</h1>
    
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}
export default App