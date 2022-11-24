import React, {useState} from "react";
import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

type PropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export const Select = (props: PropsType) => {

    const [active, setActive] = useState(true)

    const selectedItem = props.items.find(i => i.value === props.value);

    return (
        <>
            <select>
                <option value="">Minsk</option>
                <option value="">Kiev</option>
                <option value="">Moscow</option>
            </select>
            <div className={styles.select}>
            <h3>{selectedItem && selectedItem.title}</h3>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}
