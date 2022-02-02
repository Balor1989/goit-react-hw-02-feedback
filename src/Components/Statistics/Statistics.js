import s from './Statistics.module.css';

const Statistics = ({
	options,
	onCountTotalFeedback,
	onCountPositiveFeedbackPercentage,
}) => (
	<ul className={s.statList}>
		<li className={s.statBox}>
			<p className={s.stat}>Good: {options.good}</p>
		</li>

		<li className={s.statBox}>
			<p className={s.stat}>Neutral: {options.neutral}</p>
		</li>

		<li className={s.statBox}>
			<p className={s.stat}>Bad: {options.bad}</p>
		</li>

		<li className={s.statBox}>
			<p className={s.total}>Total: {onCountTotalFeedback}</p>
		</li>
		<li className={s.statBox}>
			<p className={s.positivePersentage}>
				Positive feedback: {onCountPositiveFeedbackPercentage}%
			</p>
		</li>
	</ul>
);

export default Statistics;
