import s from './Counter.module.css'

export function Notification({ message }) {
    return (
        <div>
            <h4 className={s.notification}>{message}</h4>
        </div>
    )
}