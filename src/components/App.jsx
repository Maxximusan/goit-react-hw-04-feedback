// import Counter from '../components/Counter/Counter'
// import React from 'react'
import {useState} from 'react'
import { Section } from 'components/Section/Section'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import { Statistics } from 'components/Statistics/Statistics'
import { Notification } from 'components/Notification/Notification'


export const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
 
  const options = {good , neutral, bad }


  const onLeaveFeedback = (event) => {
  
    console.log(event);
    
    switch (event) {
      case 'good':
        setGood((good) => good + 1);
        break;
      
      case 'neutral':
        setNeutral(neutral => neutral + 1)
        break;
      
      case 'bad':
        setBad(bad => bad + 1)
        break;
      
      default:
        return;
    }
  };



  const countTotalFeedback = () => {
  
    return good + neutral + bad
}

  const countPositiveFeedbackPercentage = () => {
    const goodMark = good
    const total = countTotalFeedback()
    console.log(goodMark)
    console.log(total);
    const averagePositiveFeedback = Math.round(goodMark / total * 100);
    return total !== 0 ? averagePositiveFeedback : 0
        
  }
  

    return (
      <>
  
      <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
      </Section>
        <Section title="Statistic">
          {countTotalFeedback() > 0
          ? (
       <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}>
            
            </Statistics>
         ) : (<Notification message="There is no feedback"></Notification>)}
         </Section>
        </>
    )
  }

          
        
