
const Statistics = ({options}) => (
    <ul>
        {options.map(option => (
            <li key={option}>
                <p>{option}</p>
         </li>
     ))}
    </ul>
)

export default Statistics