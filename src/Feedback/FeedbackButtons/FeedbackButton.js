import propTypes from "prop-types"
import s from './FeedbackButton.module.css'


const FeedbackButtons = ({options, onHandleClick}) => (

            <ul className={s.buttonList}>
                {options.map(option => (
                    <li className={s.buttonBox} key = {option}>
                        <button className={s.button} type="button" name={option} onClick={onHandleClick}>{option}</button>
                    </li> 
                ))}
            </ul>)
                
export default FeedbackButtons

FeedbackButtons.propTypes = {
    options: propTypes.array,
    option: propTypes.string,
    onHandleClick: propTypes.func
}