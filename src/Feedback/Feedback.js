import { Component } from "react/cjs/react.production.min"
import FeedbackButtons from "./FeedbackButton"
import FeedbackTitle from "./FeedbackTitle"
import Statistics from "./Statistics"

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad:0
    }
    
    handleClick = (e) => {
        console.log(e.currentTarget.name)
        this.setState((prevState) => {
            console.log(prevState)
            return {
                [e.target.name]: prevState[e.target.name] + 1,
            }
        })
    }

    render() {
        const {good, neutral, bad, total} = this.state
        return (
            <>
                <FeedbackTitle
                    title={'Please leave feedback!'} />
                <FeedbackButtons
                    options={['good', 'neutral', 'bad']}
                    onHandleClick={this.handleClick}
                />
                <Statistics
                    options={[`Good: ${good} `, `Neutral: ${neutral}`, `Bad: ${bad}`, `Total: ${total}`, 'Positive feedback: ']} />
            </>
        )
    }
}

export default Feedback