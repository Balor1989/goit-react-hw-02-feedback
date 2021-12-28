import propTypes from "prop-types"


const FeedbackTitle = ({ title, children }) => (
    <>
    <h1>{title}</h1>
        {children}
    </>
)

export default FeedbackTitle

FeedbackTitle.propTypes = {
    titte: propTypes.string
}