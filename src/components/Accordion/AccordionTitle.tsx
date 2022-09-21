import React from "react";

type PropsType ={
    title: string
}
export const AccordionTitle = (props: PropsType) => {
    return (
        <div>
            <h2>---{props.title}---</h2>
        </div>
    )
}
