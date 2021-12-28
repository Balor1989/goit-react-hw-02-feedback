import propTypes from "prop-types"


const FeedbackButtons = ({options}) => (

            <ul>
                {options.map(option => (
                    <li key = {option}>
                        <button type="button">{option}</button>
                    </li> 
                ))}
            </ul>)
                
export default FeedbackButtons

FeedbackButtons.propTypes = {
    options: propTypes.array
}