import propTypes from "prop-types"


const Section = ({ title, children }) => (
    <>
    <h1>{title}</h1>
        {children}
    </>
)

export default Section

Section.propTypes = {
    titte: propTypes.string
}