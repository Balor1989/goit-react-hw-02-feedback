import propTypes from "prop-types"


const FeedbackTitle = ({title}) =>(
    <h1>{title}</h1>
)

export default FeedbackTitle

FeedbackTitle.propTypes = {
    titte: propTypes.string
}