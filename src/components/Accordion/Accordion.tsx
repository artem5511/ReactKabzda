import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type ItemType = {
    title: string
    value: any
}

type PropsType = {
    collapsed: boolean
    titleValue: string
    onChange: () => void
    items: Array<ItemType>
    onClick: (value: any)=> void
}

export const Accordion = (props: PropsType) => {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


// <AccordionTitle title={props.titleValue}/>
// {!props.collapsed && <AccordionBody/>}

// export const Accordion2 = (props: PropsType) => {
//     if (props.collapsed === true) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody title={props.titleValue}/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     }
// }
