import s from './Counter.module.css'

export const FeedbackOptions = ({ options, name }) => {
    return (
        <li><button className={s.button} value={name} onClick={() => options(name)}>{name}</button></li>
    )
}