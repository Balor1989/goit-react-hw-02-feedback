import s from './Statistics.module.css'

const Statistics = ({options, onCountTotalFeedback, onCountPositiveFeedbackPercentage}) => (
    <ul className={s.statList}>
        {options.map(option => (
            <li className={s.statBox} key={option}>
                <p className={s.stat}>{option}</p>
         </li>
        ))}
        <li className={s.statBox}>
            <p className={s.total}>Total: {onCountTotalFeedback}</p>
        </li>
        <li className={s.statBox}>
            <p className={s.positivePersentage}>Positive feedback: {onCountPositiveFeedbackPercentage}%</p>
        </li>
    </ul>
)

export default Statistics
