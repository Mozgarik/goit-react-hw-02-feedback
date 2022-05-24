import s from './Counter.module.css'
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, name }) => {
    return (
        <li><button className={s.button} value={name} onClick={() => options(name)}>{name}</button></li>
    )
}

FeedbackOptions.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.func.isRequired
    }