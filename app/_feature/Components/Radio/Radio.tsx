
import R from './Radio.module.css'

interface Inter__Radio {
    label: string,
    name: string,
    id: string,
    value: string,
    checked: boolean
}

export default function Radio({ label, name, id, value, checked }: Inter__Radio) {

    return (
        <>
            <div className={R['Radio']}>
                <input
                    defaultChecked={checked}
                    type="radio"
                    name={name}
                    id={id}
                    defaultValue={value}
                />
                <label htmlFor={id}>{label}</label>
            </div>

        </>
    )
}
