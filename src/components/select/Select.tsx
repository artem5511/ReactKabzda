import React from "react";

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
    return (
        <div>
            <div>{'My select'}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}
