
const Statistics = ({options, onCountTotalFeedback, onCountPositiveFeedbackPercentage}) => (
    <ul>
        {options.map(option => (
            <li key={option}>
                <p>{option}</p>
         </li>
        ))}
        <li>
            <p>Total: {onCountTotalFeedback}</p>
        </li>
        <li>
            <p>Positive feedback: {onCountPositiveFeedbackPercentage}%</p>
        </li>
    </ul>
)

export default Statistics
