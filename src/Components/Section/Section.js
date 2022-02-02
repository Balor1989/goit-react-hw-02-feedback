import propTypes from "prop-types"
import s from './Section.module.css'


const Section = ({ title, children }) => (
    <>
    <h2 className={s.sectionTitle}>{title}</h2>
        {children}
    </>
)

export default Section

Section.propTypes = {
    titte: propTypes.string
}