import { Component } from "react/cjs/react.production.min"
import FeedbackButtons from "./FeedbackButton"
import Section from "./Section"
import Statistics from "./Statistics"

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
     
    render() {
        const { good, neutral, bad } = this.state

        return (
            <>
                <Section title={'Please leave feedback!'}>
                    <FeedbackButtons
                        options={['good', 'neutral', 'bad']}
                        onHandleClick={this.handleClick}
                    />
                </Section>
                <Section title={'Statistics'}>
                    <Statistics
                        options={[`Good: ${good} `, `Neutral: ${neutral}`, `Bad: ${bad}`]}
                        onCountTotalFeedback={this.countTotalFeedback()}/>
                </Section>
            </>
        )
    }
}

export default Feedback