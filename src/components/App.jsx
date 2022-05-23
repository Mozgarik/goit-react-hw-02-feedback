import React, {Component} from "react";
import { Feedback } from "./Counter/Feedback";
import { Statistics } from "./Counter/Statistics";
import { Notification } from "./Counter/Notification";

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

handleIncrement = (el) => {
    this.setState(prevState => ({ 
        [el]: prevState[el] += 1 
    }))
}

countTotalFeedback() {
  return this.state.good + this.state.neutral + this.state.bad
}

countPositiveFeedbackPercentage() {
  return Math.round(this.state.good * 100 / this.countTotalFeedback());
}

render() {

 return (
  <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
  }}
>
     <div className="Counter">
        <Feedback
        options={this.handleIncrement}
        title={'Please leave feedback'}
        />
        {this.countTotalFeedback() > 0 ? 
        <Statistics 
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()}/>
         :
        <Notification 
        message="There is no feedback"/>} 
     </div>
     </div>
 )
    }
}

export default App