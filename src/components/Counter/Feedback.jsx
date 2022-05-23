import s from './Counter.module.css'
import { FeedbackOptions } from './FeedbackOptions'
import { nanoid } from 'nanoid'

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