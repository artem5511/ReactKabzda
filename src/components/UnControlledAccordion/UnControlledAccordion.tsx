import React, {useState} from "react";
import {AccordionBody} from "../Accordion/AccordionBody";

type PropsType = {
    titleValue: string
    // collapsed: boolean
}

export const UnControlledAccordion = (props: PropsType) => {

    let [collapsed, setCollapsed] = useState(false)
return (
    <div>
        <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
        {!collapsed && <AccordionBody/>}
    </div>
)
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}

function AccordionTitle (props:AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.onClick()}}>--- {props.title} ---</h3>
    )
}

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
