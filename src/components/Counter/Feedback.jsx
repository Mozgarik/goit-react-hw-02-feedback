import s from './Counter.module.css'
import { FeedbackOptions } from './FeedbackOptions'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';


export function Feedback({ title, options }) {
    const names = ['good', 'neutral', 'bad']
    return (
    <div className='Feedback-Statistic'>
    <h2>{title}</h2>
    <ul className={s.buttons}>
    {names.map(el => {
       return <FeedbackOptions 
    options={options}
    name={el}
    key={nanoid()} 
    />
    })}
    </ul>
   </div>
  )
}

Feedback.propTypes = {
   title: PropTypes.string.isRequired,
   options: PropTypes.func.isRequired
   }