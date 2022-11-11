// import Counter from '../components/Counter/Counter'
import React from 'react'
import { Section } from 'components/Section/Section'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import { Statistics } from 'components/Statistics/Statistics'
import { Notification } from 'components/Notification/Notification'

export class App extends React.Component{

 
state = {
  good: 0,
  neutral: 0,
  bad: 0,
  
  }
  

  onLeaveFeedback = (option) => {
     console.log(option);
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
        
      };
    });
  };



  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    console.log(this.state);
    return good + neutral + bad
}

  countPositiveFeedbackPercentage = () => {
    const goodMark = this.state.good
    const total = this.countTotalFeedback()
    console.log(goodMark)
    console.log(total);
    const averagePositiveFeedback = Math.round(goodMark / total * 100);
    return total !== 0 ? averagePositiveFeedback : 0
        
  }
  

  render() {
    const mark = this.state
    

    return (
      <>
  
      <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
      </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() > 0
          ? (
       <Statistics
            good={mark.good}
            neutral={mark.neutral}
            bad={mark.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}>
            
            </Statistics>
         ) : (<Notification message="There is no feedback"></Notification>)}
         </Section>
        </>
    )
  }
}

         
          
        
