import { Component } from "react/cjs/react.production.min"
import FeedbackButtons from "./FeedbackButtons/FeedbackButton"
import Section from "./Section/Section"
import Statistics from "./Statistics/Statistics"
import Notification from "./Notification/Notification"
import s from './Feedback.module.css'

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad:0
    }
    
    handleClick = (e) => {
        this.setState((prevState) => {
            return {
                [e.target.name]: prevState[e.target.name] + 1,
            }
        })
    }
    countTotalFeedback = () => {
        const {good, bad, neutral} = this.state
        return good + neutral + bad
    }
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        if (!good) {
            return 0;
        }
        return (good * 100 / this.countTotalFeedback()).toFixed(0)
    }
     
    render() {
        const { good, neutral, bad } = this.state
        return (
            <section className={s.feedbackSection}>
                <Section title={'Please leave feedback!'}>
                    <FeedbackButtons
                        options={['good', 'neutral', 'bad']}
                        onHandleClick={this.handleClick}
                    />
                </Section>
                {this.countTotalFeedback() === 0
                    ? <Notification message={"No feedback given"} />
                    : <Section title={'Statistics'}>
                        <Statistics
                            options={[`Good: ${good} `, `Neutral: ${neutral}`, `Bad: ${bad}`]}
                            onCountTotalFeedback={this.countTotalFeedback()}
                            onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()} />
                    </Section>}
            </section>
        )
    }
}

export default Feedback