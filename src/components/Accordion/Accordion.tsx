import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type PropsType = {
    collapsed: boolean
    titleValue: string
    onChange: () => void

}

export const Accordion = (props: PropsType) => {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
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
