import propTypes from "prop-types"


const FeedbackButtons = ({options, onHandleClick}) => (

            <ul>
                {options.map(option => (
                    <li key = {option}>
                        <button type="button" onClick={onHandleClick}>{option}</button>
                    </li> 
                ))}
            </ul>)
                
export default FeedbackButtons

FeedbackButtons.propTypes = {
    options: propTypes.array
}