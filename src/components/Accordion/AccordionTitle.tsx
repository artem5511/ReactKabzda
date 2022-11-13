import React from "react";

type PropsType ={
    title: string
    onChange: () => void
}
export const AccordionTitle = (props: PropsType) => {
    return (
        <div>
            <h2 onClick={(e) => props.onChange()}> ---{props.title}---</h2>
        </div>
    )
}
