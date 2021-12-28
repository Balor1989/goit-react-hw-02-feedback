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
    handleClick = () => {
        console.log('Click!')
    }

    render() {
        return (
            <>
                <FeedbackTitle
                    title={'Please leave feedback!'} />
                <FeedbackButtons
                    options={['good', 'neutral', 'bad']}
                    onHandleClick={this.handleClick}
                />
                <Statistics
                    options={['Good: ', 'Neutral: ', 'Bad: ', 'Total: ', 'Positive feedback: ']} />
            </>
        )
    }
}

export default Feedback